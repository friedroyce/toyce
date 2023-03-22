require('dotenv').config()
const fs = require('fs')
const { Client, GatewayIntentBits , Collection } = require('discord.js')
const express = require('express')

const handlers = fs.readdirSync('./src/handlers').filter(file => file.endsWith('.js'))
const app = express();
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
const port = 3000;
client.snipes = {};

(async () => {
    handlers.forEach(handler => { require(`./handlers/${handler}`)(client) })
    client.loadEvents('./src/events')
    client.loadCommands('./src/commands')
    client.login(process.env.TOKEN)
})()

app.get('/', (req, res) => {
  res.send('Hello World! Em toyce!')
})

app.listen(port, () => {
  console.log(`toyce listening at http://localhost:${port}`)
})