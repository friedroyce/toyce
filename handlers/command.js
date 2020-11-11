const fs = require('fs')
const path = require('path')

module.exports.setup = (bot) => {

    const commandfiles = findNested('./commands', '.js')

    if(commandfiles.length <= 0) return console.log("there are no commands to load")

    console.log(`loading ${commandfiles.length} commands`)
    commandfiles.forEach(file => {
        const commandfile = require(file)
        bot.commands.set(commandfile.name, commandfile)

        console.log(`loaded command '${commandfile.name}'`)
    })

}

function findNested(dir, pattern){
    let results = []

    fs.readdirSync(dir).forEach(subdir => {
        subdir = path.resolve(dir, subdir)
        const stat = fs.statSync(subdir)

        if(stat.isDirectory()){
            results = results.concat(findNested(subdir, pattern))
        }

        if(stat.isFile() && subdir.endsWith(pattern)){
            results.push(subdir)
        }

    })

    return results
}