npm install discord.io --save
npm install izy521/discord.io --save
var Discord = require('izy521/discord.io');

var bot = new Discord.Client({
    token: "MjkxMjU4MzQ4OTAzNDY0OTcw.C6m4Cw.KHlxEfuuDywpMzbMd_ZpXkzdFUk",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});
