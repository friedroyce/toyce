const Booru = require('booru')

module.exports = {
    name: 'paheal',
    description: 'returns an image from rule34.paheal.net',
    category: 'nsfw',
    aliases: [
        'rule34.paheal.net', 'pa', 'paheal'
    ],
    run: async (bot, message, args) => {
        let tags = args

        let posts = await Booru.search('pa', tags, { limit: 100, random: true })
        let post = posts[Math.floor(Math.random()*(posts.length))]

        if(!post) return message.channel.send('no posts found :(')

        message.channel.send(post.fileUrl)
    }
}