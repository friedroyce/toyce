const Discord = require('discord.js')
const { prefix, colour } = require('../../data/config.json')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('yeets a user from the server'),
    category: 'moderation',
    aliases: ['kick', 'kik', 'yeet'],
    run: async (client, message, args) => {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command");

        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if (!reason) reason = "for no reason. that's sus";

        const kickEmbed = new Discord.MessageEmbed()
            .setTitle(`you just got yeeted from ${message.guild.name}`)
            .setDescription(`Reason: ${reason}`)
            .setColor(colour)
            .setTimestamp()
            .setFooter(client.user.tag, client.user.displayAvatarURL());

        if (!args) return message.channel.send(`usage: \`${prefix}kick <@user> <reason>\``);
        if (!mentionedMember) return message.channel.send(`that user is not a member of the server`);

        try {
            await mentionedMember.send(kickEmbed);
        } catch (err) {
            console.log(`was unable to message the member`);
        }

        try {
            await mentionedMember.kick(reason);
            message.channel.send("user got successfully yeeted");
        } catch (err) {
            console.log(err);
            message.channel.send("was unable to yeet the user");
        }
    }
}