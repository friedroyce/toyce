const Booru = require('booru')

module.exports = {
    name: 'rule34',
    description: 'returns an image from rule34.xxx',
    category: 'nsfw',
    aliases: [
        'rule34.xxx', 'r34', 'rule34'
    ],
    run: async (bot, message, args) => {
        let tags = args

        let posts = await Booru.search('r34', tags, { limit: 100, random: true })
        let post = posts[Math.floor(Math.random()*(posts.length))]

        if(!post) return message.channel.send('no posts found :(')

        message.channel.send(post.fileUrl)
    }
}