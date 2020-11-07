const discord = require('discord.js')
const {token} = require('./config.json')

const bot = new discord.Client()
bot.commands = new discord.Collection()

require('./handlers/event')()
require('./handlers/command')(bot)

module.exports = {
    bot: bot
}

bot.login(token)