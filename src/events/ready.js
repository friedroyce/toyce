const {bot} = require('../toyce')

module.exports = {
    name: "ready",
    description: "when bot is ready"
}

bot.once('ready', () => {
    console.log('toyce is online!')
})