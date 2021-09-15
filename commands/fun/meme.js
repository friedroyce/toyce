const discord = require('discord.js')
const imageapi = require('imageapi.js')

module.exports = {
    name: 'meme',
    description: 'sends a meme',
    category: 'fun',
    aliases: ['meme'],
    run: async (bot, message, args) => {
        let subreddits = [
            "memes"
        ]

        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
        let advanced = await imageapi.advanced(subreddit, 'top')
        
        message.channel.send(advanced.img)
    }
}