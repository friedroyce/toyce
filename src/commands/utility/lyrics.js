const Discord = require('discord.js')
const superagent = require('superagent')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lyrics')
        .setDescription('sends lyrics for a song')
        .addStringOption(option =>
            option.setName('title')
                .setDescription('song title')
                .setRequired(true)),
    category: 'utility',
    aliases: ['lyrics', 'lyric'],
    async execute(client, command) {
        let songName = (command.slash) ? command.options.getString('title') : command.args.join()

        if(!songName) {
            command.message.channel.send("please input a song title")
            return;
        }

        try{
            let { body } = await superagent
            .get(`https://some-random-api.ml/lyrics`)
            .query({ title: songName })

            if (body.lyrics.length > 2048)
                if(command.slash) return await command.interaction.reply({ content: 'song lyrics exceeds 2048 characters', ephemeral: false });
                else return command.message.channel.send('song lyrics exceeds 2048 characters')

            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(body.title)
                .setURL(body.links.genius)
                .setDescription(body.lyrics)
                .setFooter(`powered by genius`)

            if(command.slash) await command.interaction.reply({ content: embed, ephemeral: false });
            else command.message.channel.send({embeds: [embed]})
        }
        catch(err){
            if(command.slash) await command.interaction.reply({ content: "couldnt find the songs lyrics", ephemeral: false });
            else command.message.channel.send("couldnt find the songs lyrics")
        }
    }
}