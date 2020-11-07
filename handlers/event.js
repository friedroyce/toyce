const fs = require('fs')

module.exports.setup = () => {

    fs.readdir('./events', (err, files) => {
        if(err) console.log(err);
    
        const eventfiles = files.filter(file => file.endsWith('.js'))
    
        if(eventfiles.length <= 0) return console.log("there are no events to load")
        
        console.log(`loading ${eventfiles.length} events`)
        for(const file of eventfiles){
            const eventfile = require(`../events/${file}`)
            
            console.log(`loaded event '${eventfile.name}'`)
        }
    
    })

}