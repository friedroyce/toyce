module.exports = {
    name: 'ping',
    description: 'checks the bots latency',
    category: 'information',
    aliases: ['ping', 'kaping', 'ka-ping', 'badaping', 'ba-da-ping', 'bada-ping'],
    run: async (bot, message, args) => {
        var pong = ['pong', 'ka-pong', 'ba-da-pong', 'bada-pong']
        const i = Math.floor((Math.random() * pong.length))
        
        const ping = Date.now() - message.createdTimestamp
        message.channel.send(`${pong[i]}! your ping is ${ping}ms`)
    }
}