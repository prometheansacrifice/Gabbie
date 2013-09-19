// Create the configuration
var config = {
	channels: ["#fsmk"],
	server: "irc.freenode.net",
	botName: "Gabbie"
};
// Get the lib
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server,config.botName,{
	channels: config.channels});
// Listen for joins
// bot.addListener("join", function(channel, who) {
// 	// Welcome them in!
// 	bot.say(channel, who + "...dude...welcome back!");
// });
// Listen for any message, PM said user when he posts
bot.addListener("message", function(from, to, text, message) {
	bot.say(from, "Hi! I'm Gabbie. I'm Manas's friend. He'll tell you more about me");
});

// Listen for any message, say to him/her in the room
bot.addListener("message", function(from, to, text, message) {
	bot.say(config.channels[0],"Hello! I'm not confortable here");
});