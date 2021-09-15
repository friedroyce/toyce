const Booru = require('booru')

module.exports = {
    name: 'gelbooru',
    description: 'returns an image from gelbooru.com',
    category: 'nsfw',
    aliases: [
        'gelbooru.com', 'gb', 'gel', 'gelbooru'
    ],
    run: async (bot, message, args) => {
        let tags = args

        let posts = await Booru.search('gel', tags, { limit: 100, random: true })
        let post = posts[Math.floor(Math.random()*(posts.length))]

        if(!post) return message.channel.send('no posts found :(')

        message.channel.send(post.fileUrl)
    }
}