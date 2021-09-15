require('dotenv').config();
const discord = require('discord.js')
const events = require('./handlers/event')
const commands = require('./handlers/command')

const bot = new discord.Client()
bot.commands = new discord.Collection()

events.setup()
commands.setup(bot)
bot.login(process.env.TOKEN)

module.exports = {
    bot: bot
}