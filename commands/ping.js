module.exports = {
    name: "ping",
    aliases: ["ping", "p"],
    description: "checks the bots latency",
    
    requiredArgs: "none",
    minArgs: 0,
    maxArgs: null,

    permissions:[],
    requredRoles:[],
    permissionError: "you do not have perms to use this",
    async execute(bot, message, args){
        message.channel.send("pong")
    },
}