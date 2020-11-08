module.exports = {
    name: "notfound",
    aliases: ["notfound"],
    description: "informs user the command does not exist",
    
    requiredArgs: "none",
    minArgs: 0,
    maxArgs: null,

    permissions:[],
    requredRoles:[],
    permissionError: "you do not have perms to use this",
    run: async (bot, message, args) => {
        message.channel.send("that command does not exist")
    },
}