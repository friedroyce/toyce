const discord = require('discord.js')
const config = require('./config.json')

const bot = new discord.Client()

bot.login(config.token)

bot.once('ready', () => {
    console.log('toyce is online!')
})

bot.on('message', (message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
})