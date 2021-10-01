const imageapi = require('imageapi.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('sends a meme'),
    category: 'fun',
    aliases: ['meme'],
    async execute(client, command) {
        let subreddits = ["memes"]

        let subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))]
        let advanced = await imageapi.advanced(subreddit, 'top')

        if(command.slash) await command.interaction.reply({ content: advanced.img, ephemeral: false });
        else command.message.channel.send(advanced.img)
    }
}