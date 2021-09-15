const booru = require('booru')
const {prefix} = require('../../config.json')

module.exports = {
    name: 'booru',
    description: 'sends an image from booru sites',
    category: 'fun',
    aliases: [
        'booru', 'b', 'hentai', 'h', 'nsfw', 'sfw',
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
        var post
        var count = 0
        
        if(command !== 'booru' && command !== 'hentai' && command !== 'h' && command !== 'b' && command !== 'nsfw' && command !== 'sfw') {
            let site = command

            if(args.length >= 2 && site === 'danbooru.donmai.us')
                return message.channel.send('can only search one tag for this site')

            let posts = await booru.search(site, args, { limit: 5, random: true })
            post = posts[Math.floor(Math.random()*(posts.length))]
            if(!post) return message.channel.send('no posts found :(')
        }
        else while(!post){
            var sites

            if((command === 'hentai' || command === 'h' || command === 'nsfw') || ((command === 'booru' || command === 'b') && args[0] === 'nsfw')){
                sites = boorus['nsfw']

                if(args[0] === 'nsfw')
                    args.shift()
            }
            else if(command === 'sfw' || ((command === 'booru' || command === 'b') && args[0] === 'sfw')){
                sites = boorus['sfw']

                if(args[0] === 'nsfw')
                    args.shift()
            }
            else{
                let categories = Object.keys(boorus)
                let category = categories[Math.floor(Math.random()*(categories.length))]

                sites = boorus[category]
            }

            let site = sites[Math.floor(Math.random()*(sites.length))].domain
            let tagcount = args.length

            if(args.length < 2 || site !== 'danbooru.donmai.us'){
                let tags = args.slice(0, tagcount)

                posts = await booru.search(site, tags, { limit: 5, random: true })
                post = posts[Math.floor(Math.random()*(posts.length))]
                count++

                if(count > 30)
                    return message.channel.send('no posts found :(')
            }

        }
        message.channel.send(post.fileUrl)
    }
}