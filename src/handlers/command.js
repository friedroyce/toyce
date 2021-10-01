const path = require('path')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require('fs')

const clientId = '866679101916839977'
const guildId = '849691145830137919'

module.exports = (client) => {
    client.loadCommands = async (path) => {
        client.commandArray = []
        const commandfiles = findNested(path, '.js')
        if (commandfiles.length <= 0) return console.log("there are no commands to load")
        console.log(`loading commands`)
        commandfiles.forEach(file => {
            const command = require(file)
            client.commands.set(command.data.name, command)
            client.commandArray.push(command.data.toJSON())
            console.log(`loaded command '${command.data.name}'`)
        })

        const rest = new REST({ version: '9' }).setToken(process.env.token);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.')

                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: client.commandArray },
                );

                console.log('Successfully reloaded application (/) commands.')
            } catch (error) {
                console.error(error)
            }
        })()
    }
}

function findNested(dir, pattern) {
    let results = []

    fs.readdirSync(dir).forEach(subdir => {
        subdir = path.resolve(dir, subdir)
        const stat = fs.statSync(subdir)
        if (stat.isDirectory()) results = results.concat(findNested(subdir, pattern))
        if (stat.isFile() && subdir.endsWith(pattern)) results.push(subdir)
    })

    return results
}