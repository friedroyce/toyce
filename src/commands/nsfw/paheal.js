const Booru = require('booru')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('paheal')
        .setDescription('returns an image from rule34.paheal.net')
        .addStringOption(option =>
            option.setName('tags')
                .setDescription('tags needed for specific searches')
                .setRequired(false)),
    category: 'nsfw',
    aliases: ['rule34.paheal.net', 'pa', 'paheal'],
    async execute(client, command) {
        let tags = (command.slash) ? command.options.getString('tags') : command.args
        let reply = await this.process(tags)
        if(command.slash) await command.interaction.reply({ content: reply, ephemeral: false });
        else command.message.channel.send(reply)
    },
    async process(tags){
        let posts = await Booru.search('pa', tags, { limit: 100, random: true })
        let post = posts[Math.floor(Math.random() * (posts.length))]
        if (!post) return 'no posts found :('
        else return post.fileUrl
    }
}