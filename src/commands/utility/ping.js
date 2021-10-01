const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('checks the bots latency'),
	category: 'utility',
	aliases: ['ping', 'kaping', 'ka-ping', 'badaping', 'ba-da-ping', 'bada-ping'],
	async execute(client, command) {
		var pong = ['pong', 'ka-pong', 'ba-da-pong', 'bada-pong']
        const i = Math.floor((Math.random() * pong.length))
		if(command.slash){
			await command.interaction.reply(`${pong[i]}!`)
		}
		else{
			const ping = Date.now() - command.message.createdTimestamp
			command.message.channel.send(`${pong[i]}! your ping is ${ping}ms`)
		}
	}
}


// module.exports = {
//     name: 'ping',
//     description: 'checks the bots latency',
//     category: 'utility',
//     aliases: ['ping', 'kaping', 'ka-ping', 'badaping', 'ba-da-ping', 'bada-ping'],
//     run: async (bot, message, args) => {
//         var pong = ['pong', 'ka-pong', 'ba-da-pong', 'bada-pong']
//         const i = Math.floor((Math.random() * pong.length))

//         const ping = Date.now() - message.createdTimestamp
//         message.channel.send(`${pong[i]}! your ping is ${ping}ms`)
//     }
// }