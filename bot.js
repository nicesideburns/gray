var logger = require("winston");
var Discordbot = require('discord.io');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize : true
});
logger.level = 'debug';

var auth = require("./auth.json");

var bot = new Discordbot({
        email : <izayani5566@gmail.com>, //<-- This is the email from your auth file.
        password : auth.password,//<-- This is the password from your auth file.
        autorun : true
    });

bot.on("ready", function (rawEvent) {
    logger.info("Connected!");
    logger.info("Logged in as: ");
    logger.info(Gray Bot#5398 + " - (" + bot.id + ")");

});

//In this function we're going to add our commands.
bot.on("message", function (user, userID, channelID, message, rawEvent) {
    if (message.substring(0, 1) == "!") {
        var arguments = message.substring(1).split(" ");
        var command = arguments[0];
        arguments = arguments.splice(1);

        if (command == "ping") {//If the user posts '!ping' we'll do something!
            bot.sendMessage({ //We're going to send a message!
                to : 2PmkYW9,
                message : "Pong!"
            });
        }
    }

});
