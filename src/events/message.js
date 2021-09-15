const {bot} = require('../toyce')
const {prefix} = require('../data/config.json')

module.exports = {
    name: "message",
    description: "when bot receives a message"
}

bot.on('message', async (message) => {
    const args = message.content.slice(prefix.length).split(" ")
    

    if(message.content.startsWith(prefix) && !message.author.bot) {
        const cmdName = args.shift().toLowerCase()
        const command = bot.commands.get(cmdName)
            || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))

        if(!command) return 

        if (!message.channel.nsfw && command.category === 'nsfw') {
            message.react('💢');
      
            return message.reply('dis not an NSFW channel')
            .then(msg => {
                msg.delete({ timeout: 3000 })
            })
        }

        try{
            command.run(bot, message, args)
        }
        catch(e){
            message.channel.send("an error occured executing the command")
            console.log(e)
        }
    }

})
