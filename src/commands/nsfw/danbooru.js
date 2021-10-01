const Booru = require('booru')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('danbooru')
        .setDescription('returns an image from danbooru.donmai.us')
        .addStringOption(option =>
            option.setName('tags')
                .setDescription('use spaces to separate tags and underscores for tags  with multiple words. example: \'genshin_impact animated\'')
                .setRequired(false)),
    category: 'nsfw',
    aliases: ['danbooru.donmai.us', 'db', 'dan', 'danbooru'],
    async execute(client, command) {
        let tags = (command.slash) ? command.options.getString('tags') : command.args
        let reply = await this.process(tags)
        if(command.slash) await command.interaction.reply({ content: reply, ephemeral: false });
        else command.message.channel.send(reply)
    },
    async process(tags){
        let posts = await Booru.search('dan', tags, { limit: 100, random: true })
        let post = posts[Math.floor(Math.random() * (posts.length))]
        if (!post) return 'no posts found :('
        else return post.fileUrl
    }
}