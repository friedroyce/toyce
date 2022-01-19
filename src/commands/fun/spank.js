const { MessageAttachment } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { Canvas } = require('canvacord')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spank')
        .setDescription('spanks a target user')
        .addUserOption(option => 
            option.setName('target')
                .setDescription('user to be spankd')
                .setRequired(true)),
    category: 'fun',
    aliases: ['spank'],
    async execute(client, command) {
        const message = command.message
        const interaction = command.interaction

        const user = (command.slash) ? command.options.getUser('target') : message.mentions.users.first() 
        console.log(user)
        if(!user){
            if(command.slash) await interaction.reply({ content: "please spank someone", ephemeral: false });
            else message.channel.send("please spank someone")
            return;
        }

        const author = (command.slash) ? interaction.user.displayAvatarURL({ format: 'png' }) : message.author.displayAvatarURL({ format: 'png' })
        const target = user.displayAvatarURL({ format: 'png' })

        const image = await Canvas.spank(author, target)

        if(command.slash) await interaction.reply({ files: [{ attachment: image, name: 'image.png' }], ephemeral: false });
        else message.channel.send({ files: [{ attachment: image, name: 'image.png' }] })
        
    }
}