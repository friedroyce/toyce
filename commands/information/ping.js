module.exports = {
    name: "ping",
    aliases: ["ping", "kaping", "ka-ping", "badaping", "ba-da-ping", "bada-ping"],
    description: "checks the bots latency",
    
    requiredArgs: "none",
    minArgs: 0,
    maxArgs: null,

    permissions:[],
    requredRoles:[],
    permissionError: "you do not have perms to use this",
    run: async (bot, message, args) => {
        message.channel.send(`...`).then(msg => {
            var pong = ["pong", "ka-pong", "ba-da-pong", "bada-pong"]
            const ping = msg.createdTimestamp - message.createdTimestamp
            const i = Math.floor((Math.random() * pong.length))

            msg.edit(`${pong[i]} (${ping}ms)`)
        })
    }
}