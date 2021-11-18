const {prefix} = require('../data/config.json')

module.exports = {
    name: 'messageDelete',
    async execute(message, client){
        if (message.partial || (message.embeds.length && !message.content)) return; // content is null or deleted embed

        client.snipes[message.channel.id] = {
            author: message.author,
            content: message.content,
            createdAt: message.createdTimestamp,
            image: message.attachments.first()
                ? message.attachments.first().proxyURL
                : null,
        };
    }
}