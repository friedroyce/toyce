const discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    name: 'chatbot',
    description: 'chatbot',
    category: 'fun',
    aliases: ['chat', 'chatbot'],
    run: async (bot, message, args) => {
        let msg = args.join()
        let {body} = await superagent
            .get(`https://some-random-api.ml/chatbot`)
            .query({message: msg})

        message.channel.send(body.response)
    }
}