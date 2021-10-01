const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('translate')
		.setDescription('translates a given message'),
    name: 'translate',
    category: 'utility',
    aliases: ['translate'],
    async execute(client, command) {

        
        
    }
}