const client = require('nekos.life');
const neko = new client();
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('neko')
        .setDescription('uses nekos.life api to return an image')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('choose what type of image to send')
                .setRequired(true)
                // .addChoice('a', 'a')
                // .addChoice('anal', 'anal')
                // .addChoice('avatar', 'avatar')
                // .addChoice('blowjob', 'blowjob')
                // .addChoice('blowjobgif', 'blowjobgif')
                // .addChoice('boobs', 'boobs')
                // .addChoice('classic', 'classic')
                // .addChoice('cum', 'cum')
                // .addChoice('cumgif', 'cumgif')
                // .addChoice('ero', 'ero')
                // // .addChoice('erofeet', 'erofeet')
                // .addChoice('erokemonomimi', 'erokemonomimi')
                // .addChoice('erokitsune', 'erokitsune')
                // .addChoice('eroneko', 'eroneko')
                // // .addChoice('eroyuri', 'eroyuri')
                // .addChoice('femdom', 'femdom')
                // .addChoice('gasm', 'gasm')
                // .addChoice('girlsolo', 'girlsolo')
                // .addChoice('girlsologif', 'girlsologif')
                // .addChoice('hentai', 'hentai')
                // .addChoice('holo', 'holo')
                // .addChoice('holoero', 'holoero')
                // .addChoice('kemonomimi', 'kemonomimi')
                // .addChoice('keta', 'keta')
                // .addChoice('kitsune', 'kitsune')
                // .addChoice('kuni', 'kuni')
                // //.addChoice('lesbian', 'lesbian')
                // .addChoice('neko', 'neko')
                // .addChoice('pussy', 'pussy')
                // .addChoice('pussyart', 'pussyart')
                // .addChoice('pussygif', 'pussygif')
                //.addChoice('random', 'random')
                // .addChoice('spank', 'spank')
                //.addChoice('tits', 'tits')
                // .addChoice('trap', 'trap')
                // .addChoice('yuri', 'yuri')
                ),
    category: 'nsfw',
    aliases: ['neko', 'n'],
    async execute(client, command) {
        let category = (command.slash) ? command.options.getString('category') : command.args[0]  
        let reply = await this.process(category)
        if(command.slash) await command.interaction.reply({ content: reply, ephemeral: false });
        else command.message.channel.send(reply)
    },
    async process(category){
        var owo;

        // if (!category || category.length < 1) {
        //     owo = await neko.nsfw.randomHentaiGif()
        // }
        // else switch (category) {
        //     // case 'anal':
        //     //     owo = await neko.nsfw.anal()
        //     //     break;
        //     // case 'avatar':
        //     //     owo = await neko.nsfw.avatar()
        //     //     break;
        //     case 'blowjob':
        //     case 'bj':
        //         owo = await neko.nsfw.blowJob()
        //         break;
        //     case 'blowjobgif':
        //     case 'bjg':
        //         owo = await neko.nsfw.bJ()
        //         break;
        //     case 'boob':
        //     case 'boobs':
        //         owo = await neko.nsfw.boobs()
        //         break;
        //     case 'classic':
        //         owo = await neko.nsfw.classic()
        //         break;
        //     case 'cum':
        //         owo = await neko.nsfw.cumArts()
        //         break;
        //     case 'cumgif':
        //     case 'cumg':
        //         owo = await neko.nsfw.cumsluts()
        //         break;
        //     case 'ero':
        //         owo = await neko.nsfw.ero()
        //         break;
        //     // case 'erofeet':
        //     // case 'ef':
        //     //     owo = await neko.nsfw.eroFeet()
        //     //     break;
        //     case 'erokemonomimi':
        //     case 'eke':
        //         owo = await neko.nsfw.eroKemonomimi()
        //         break;
        //     case 'erokitsune':
        //     case 'eki':
        //         owo = await neko.nsfw.eroKitsune()
        //         break;
        //     case 'eroneko':
        //     case 'ene':
        //         owo = await neko.nsfw.eroNeko()
        //         break;
        //     case 'eroyuri':
        //     case 'eyu':
        //         owo = await neko.nsfw.eroYuri()
        //         break;
        //     case 'femdom':
        //         owo = await neko.nsfw.femdom()
        //         break;
        //     case 'gasm':
        //         owo = await neko.nsfw.gasm()
        //         break;
        //     case 'girlsolo':
        //         owo = await neko.nsfw.girlSolo()
        //         break;
        //     case 'girlsologif':
        //         owo = await neko.nsfw.girlSoloGif()
        //         break;
        //     case 'hentai':
        //         owo = await neko.nsfw.hentai()
        //         break;
        //     case 'holo':
        //         owo = await neko.nsfw.holo()
        //         break;
        //     case 'holoero':
        //         owo = await neko.nsfw.holoEro()
        //         break;
        //     case 'kemonomimi':
        //         owo = await neko.nsfw.kemonomimi()
        //         break;
        //     case 'keta':
        //         owo = await neko.nsfw.keta()
        //         break;
        //     case 'kitsune':
        //         owo = await neko.nsfw.kitsune()
        //         break;
        //     case 'kuni':
        //         owo = await neko.nsfw.kuni()
        //         break;
        //     // case 'lesbian':
        //     //     owo = await neko.nsfw.lesbian()
        //     //     break;
        //     case 'neko':
        //         owo = await neko.nsfw.neko()
        //         break;
        //     case 'pussy':
        //         owo = await neko.nsfw.pussy()
        //         break;
        //     case 'pussyart':
        //         owo = await neko.nsfw.pussyArt()
        //         break;
        //     case 'pussygif':
        //         owo = await neko.nsfw.pussyWankGif()
        //         break;
        //     // case 'random':
        //     //     owo = await neko.nsfw.randomHentaiGif()
        //     //     break;
        //     // case 'spank':
        //     //     owo = await neko.nsfw.spank()
        //     //     break;
        //     // case 'tits':
        //     //     owo = await neko.nsfw.tits()
        //     //     break;
        //     // case 'trap':
        //     //     owo = await neko.nsfw.trap()
        //     // //     break;
        //     // case 'yuri':
        //     //     owo = await neko.nsfw.yuri()
        //     //     break;
        // }
        // console.log(owo)
        // return owo.url

        return ""
    }
}