const discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    name: 'lyrics',
    description: 'sends lyrics for a song',
    category: 'utility',
    aliases: ['lyrics', 'lyric'],
    run: async (bot, message, args) => {

        let songName = args.join()

        let {body} = await superagent
                            .get(`https://some-random-api.ml/lyrics`)
                            .query({title: songName})

        if(body.lyrics.length > 2048)
            return message.channel.send(`song lyrics exceeds 2048 characters`)
        
        const embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(body.title)
        .setURL(body.links.genius)
        .setDescription(body.lyrics)
        .setFooter(`powered by genius`)
        message.channel.send(embed)
    }
}