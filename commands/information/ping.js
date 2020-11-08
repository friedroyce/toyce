module.exports = {
    name: 'ping',
    description: 'checks the bots latency',
    category: 'information',
    aliases: ['ping', 'kaping', 'ka-ping', 'badaping', 'ba-da-ping', 'bada-ping'],
    run: async (bot, message, args) => {
        message.channel.send('...').then(msg => {
            var pong = ['pong', 'ka-pong', 'ba-da-pong', 'bada-pong']
            const ping = msg.createdTimestamp - message.createdTimestamp
            const i = Math.floor((Math.random() * pong.length))

            msg.edit(`${pong[i]} (${ping}ms)`)
        })
    }
}