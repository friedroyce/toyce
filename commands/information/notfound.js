module.exports = {
    name: 'notfound',
    description: 'informs user the command does not exist',
    category: 'information',
    aliases: ['notfound'],
    run: async (bot, message, args) => {
        message.channel.send('that command does not exist')
    },
}