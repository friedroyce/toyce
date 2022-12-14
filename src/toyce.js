require('dotenv').config()
const fs = require('fs')
const { Client, GatewayIntentBits , Collection } = require('discord.js')
const handlers = fs.readdirSync('./src/handlers').filter(file => file.endsWith('.js'))
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ], 
    partials: ["CHANNEL"] })

client.commands = new Collection();
client.snipes = {};

(async () => {
    handlers.forEach(handler => { require(`./handlers/${handler}`)(client) })
    client.loadEvents('./src/events')
    client.loadCommands('./src/commands')
    client.login(process.env.token)
})()