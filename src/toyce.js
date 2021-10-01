require('dotenv').config()
const fs = require('fs')
const { Client, Intents, Collection } = require('discord.js')
const handlers = fs.readdirSync('./src/handlers').filter(file => file.endsWith('.js'))
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] })
client.commands = new Collection();

(async () => {
    handlers.forEach(handler => { require(`./handlers/${handler}`)(client) })
    client.loadEvents('./src/events')
    client.loadCommands('./src/commands')
    client.login(process.env.token)
})()