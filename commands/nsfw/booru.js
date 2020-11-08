const booru = require('booru')
const {prefix} = require('../../config.json')

module.exports = {
    name: 'booru',
    description: 'sends an image from booru sites',
    category: 'nsfw',
    aliases: [
        'booru', 'b', 'hentai', 'h',
        'danbooru.donmai.us', 'db', 'dan', 'danbooru',
        'derpibooru.org', 'dp', 'derp', 'derpi', 'derpibooru',
        'e621.net', 'e6', 'e621',
        'e926.net', 'e9', 'e926',
        'gelbooru.com', 'gb', 'gel', 'gelbooru',
        'hypnohub.net', 'hh', 'hypno', 'hypnohub',
        'konachan.com', 'kc', 'konac', 'kcom',
        'konachan.net', 'kn', 'konan', 'knet',
        'realbooru.com', 'rb', 'realbooru',
        'rule34.paheal.net', 'pa', 'paheal',
        'rule34.xxx', 'r34', 'rule34',
        'safebooru.org', 'sb', 'safe', 'safebooru', 
        'tbib.org', 'tb', 'tbib', 'big', 
        'xbooru.com', 'xb', 'xbooru',
        'yande.re', 'yd', 'yand', 'yandere'
    ],
    run: async (bot, message, args) => {

        const command = message.content.slice(prefix.length).split(" ").shift().toLowerCase()
        var site = 'rule34'
        var post
        var posts
        var count = 0
        var sites = [
            'dp', 
            'e6', 
            'e9', 
            'gb', 
            'hh', 
            'kc', 
            'kn', 
            'rb', 
            'pa', 
            'r34', 
            'sb', 
            'tb', 
            'xb', 
            'yd'
        ]

        if(command !== 'booru' && command !== 'hentai' && command !== 'h' && command !== 'b') {
            site = command
            posts = await booru.search(site, args, { limit: 5, random: true })
            post = posts[Math.floor(Math.random()*(posts.length))]
            if(!post) return message.channel.send('no posts found :(')
        }
        else while(!post){
            site = sites[Math.floor(Math.random()*(sites.length))]
            console.log(site)
            posts = await booru.search(site, args, { limit: 5, random: true })
            post = posts[Math.floor(Math.random()*(posts.length))]
            count++
            if(count > 30) return message.channel.send('no posts found :(')
        }
        message.channel.send(post.fileUrl)

    }
}