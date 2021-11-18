const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('snipe')
		.setDescription('snipes deleted message')
        .addStringOption(option =>
            option.setName('id')
                .setDescription('id of the sht u wanna recover')
                .setRequired(false)),
	category: 'utility',
	aliases: ['snipe'],
	async execute(client, command) {

		const channel = (command.slash) ? command.interaction.options.getChannel("channel") || command.interaction.channel : command.message.channel;

		console.log(channel.id)

		const snipe = client.snipes[channel.id];
		console.log(snipe)

		if (!snipe) 
			if (command.slash)
				return command.interaction.reply("There's nothing to snipe!");
			else
				return command.message.channel.send("There's nothing to snipe!")

		const embed = new MessageEmbed()
			.setAuthor(snipe.author.tag)
			.setFooter(`#${channel.name}`)
			.setTimestamp(snipe.createdAt);
		snipe.content ? embed.setDescription(snipe.content) : null;
		snipe.image ? embed.setImage(snipe.image) : null;

		if (command.slash)
			await command.interaction.reply({ embeds: [embed] });
		else
			return command.message.channel.send({ embeds: [embed] })
	}
}