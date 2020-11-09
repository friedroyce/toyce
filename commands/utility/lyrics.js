const discord = require('discord.js')
const { api } = require('some-random-api');

module.exports = {
    name: 'lyrics',
    description: 'sends lyrics for a song',
    category: 'utility',
    aliases: ['lyrics', 'lyric'],
    run: async (bot, message, args) => {

        let songName = args.join()

        // const sraClient = new somerandom.SRAClient();

        // let song = await sraClient.fetch('/lyrics', {title: songName})

        let song = await api.other.lyrics(songName)

        console.log(song.lyrics.length)

        if(song.lyrics.length > 2048)
            return message.channel.send(`song lyrics exceeds 2000 characters`)
        
        const embed = new discord.MessageEmbed()
        .setTitle(song.title)
        .setDescription(song.lyrics)
        .setFooter(`source: ${song.links.genius}`)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}