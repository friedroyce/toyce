const discord = require('discord.js')
const {prefix, token} = require('./config.json')
const fs = require('fs')
const notfound = require('./commands/notfound')

const bot = new discord.Client()
bot.commands = new discord.Collection()

const cmds = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of cmds){
    const cmd = require(`./commands/${file}`)
    bot.commands.set(cmd.name, cmd)
    console.log(`loaded command '${cmd.name}'`)
}

//when toyce goes online
bot.once('ready', () => {
    console.log('toyce is online!')
})

//message event
bot.on('message', async (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(" ")
    const cmdName = args.shift().toLowerCase()

    const command = bot.commands.get(cmdName)
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))

    if(!command) return bot.commands.get('notfound').execute(bot, message, args)

    try{
        command.execute(bot, message, args)
    }
    catch(e){
        message.channel.send("an error occured executing the command")
        console.log(e)
    }
})

bot.login(token)