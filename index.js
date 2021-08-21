const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on('ready', () => {
  console.log(`Ready`);
  client.user.setStatus('idle');
});

client.login(config.token);