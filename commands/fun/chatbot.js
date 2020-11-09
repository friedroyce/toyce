const discord = require('discord.js')
const {api} = require('some-random-api')



module.exports = {
    name: 'chatbot',
    description: 'chatbot',
    category: 'fun',
    aliases: ['chat', 'chatbot'],
    run: async (bot, message, args) => {

        let msg = args.join()

        let chatbot = await api.other.chatbot(msg)
        
        message.channel.send(chatbot.response)
    }
}