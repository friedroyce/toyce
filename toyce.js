const discord = require('discord.js')
const {token} = require('./config.json')
const events = require('./handlers/event')
const commands = require('./handlers/command')

const bot = new discord.Client()
bot.commands = new discord.Collection()

events.setup()
commands.setup(bot)
bot.login(token)

module.exports = {
    bot: bot
}