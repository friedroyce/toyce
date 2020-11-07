const discord = require('discord.js')
const {prefix, token} = require('./config.json')
const fs = require('fs')
const notfound = require('./commands/notfound')

const bot = new discord.Client()
bot.commands = new discord.Collection()

//load commands
// const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
// for(const file of commandfiles){
//     const commandfile = require(`./commands/${file}`)
//     bot.commands.set(commandfile.name, commandfile)
    
//     console.log(`loaded command '${commandfile.name}'`)
// }

fs.readdir('./commands', (err, files) => {
    if(err) console.log(err);

    const commandfiles = files.filter(file => file.endsWith('.js'))

    if(commandfiles.length <= 0) return console.log("there are no commands to load")
    
    console.log(`loading ${commandfiles.length} commands`)
    for(const file of commandfiles){
        const commandfile = require(`./commands/${file}`)
        bot.commands.set(commandfile.name, commandfile)
        
        console.log(`loaded command '${commandfile.name}'`)
    }

})


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