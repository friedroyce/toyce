const {prefix} = require('../data/config.json')
const chat = require('../openai/chat')

module.exports = {
    name: 'messageCreate',
    async execute(message, client){
        const args = message.content.slice(prefix.length).split(" ")

        if(message.content.includes(`<@${client.user.id}>`) || message.content.includes(`<@!${client.user.id}>`)){
            args.shift()
            var text = args.join()
            if(text === "") return

            message.channel.sendTyping();
            var reply = await chat.execute(text)
            message.channel.send({ content: reply })
            return
        }
            
        if(message.content.startsWith(prefix) && !message.author.bot) {
            const cmdName = args.shift().toLowerCase()
            const command = client.commands.get(cmdName)
                || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName))
    
            if(!command) return 
    
            if (!message.channel.nsfw && command.category === 'nsfw') {
                message.react('💢');
            
                return message.reply('dis not an NSFW channel')
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
            }
    
            try{
                command.execute(client, {message: message, args: args})
            }
            catch(e){
                message.channel.send("oh no! there was an oopsie!")
                console.log(e)
            }
        }
    }
}