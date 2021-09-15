require('dotenv').config();
const { Client, Intents } = require('discord.js');
const events = require('./handlers/event')
const commands = require('./handlers/command')

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] })
bot.commands = new discord.Collection()

events.setup()
commands.setup(bot)
bot.login(process.env.TOKEN)

module.exports = {
    bot: bot
}