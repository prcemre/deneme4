/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;
const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client();
const db = require("quick.db");
require("moment-duration-format");

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "profil") {
    message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(`Avatarınız:`)
        .setImage(`${message.author.avatarURL} `)
        .setColor("RANDOM")
    );
  }
});

client.on("guildMemberAdd", member => {
  console.log("" + member.user + "**VoxDei discorduna hoşgeldin!");
  console.log(member);
  member.guild.channels
    .get("627455803519139851")
    .send("" + member.user + "**  VoxDei discorduna hoşgeldin!");
});

client.on("guildMemberRemove", member => {
  member.guild.channels
    .get("627455803519139851")
    .send("" + member.user + "**  Guild discordundan ayrıldı...");
});

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});
