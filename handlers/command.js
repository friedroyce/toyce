const fs = require('fs')

module.exports = (bot) => {

    fs.readdir('./commands', (err, files) => {
        if(err) console.log(err);
    
        const commandfiles = files.filter(file => file.endsWith('.js'))
    
        if(commandfiles.length <= 0) return console.log("there are no commands to load")
        
        console.log(`loading ${commandfiles.length} commands`)
        for(const file of commandfiles){
            const commandfile = require(`../commands/${file}`)
            bot.commands.set(commandfile.name, commandfile)
            
            console.log(`loaded command '${commandfile.name}'`)
        }
    
    })

}