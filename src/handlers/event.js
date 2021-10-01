const fs = require('fs')

module.exports = (client) => {
    client.loadEvents = async (path) =>{
        const eventFiles = fs.readdirSync(path).filter(file => file.endsWith('.js'))
        if(eventFiles.length <= 0) return console.log("there are no events to load")     
        console.log(`loading events`)
        eventFiles.forEach(file => {
            const event = require(`../events/${file}`)
            if (event.once) client.once(event.name, (...args) => event.execute(...args, client))
            else client.on(event.name, (...args) => event.execute(...args, client))
            console.log(`loaded event '${event.name}'`)
        })
    }
}