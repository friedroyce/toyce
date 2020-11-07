const Discord = require('discord.js')

const toyce = new Discord.Client()
const prefix = '>'

toyce.login(`NTc4MjI3OTE5MTE4MjcwNDY3.XNwitg.HAX7UHFuLzOKXobalpd4dxGkEUA`)

toyce.once('ready', () => {
    console.log('toyce is online!')
})

toyce.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
})