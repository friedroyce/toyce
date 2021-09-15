const Booru = require('booru')

module.exports = {
    name: 'danbooru',
    description: 'returns an image from danbooru.donmai.us',
    category: 'nsfw',
    aliases: [
        'danbooru.donmai.us', 'db', 'dan', 'danbooru'
    ],
    run: async (bot, message, args) => {
        let tags = args

        if(tags.length > 1) return message.channel.send('can only use 1 tag for danbooru')

        let posts = await Booru.search('dan', tags, { limit: 100, random: true })
        let post = posts[Math.floor(Math.random()*(posts.length))]

        if(!post) return message.channel.send('no posts found :(')

        message.channel.send(post.fileUrl)
    }
}