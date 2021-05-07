require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();

const NOTIFICATION_CHANNEL_ID = '840341906642567188';

client.on('ready', async () => {
  console.log(client.channels);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

const sendMessages = async() => {
  const channel = await client.channels.fetch(NOTIFICATION_CHANNEL_ID);
  channel.send('hi');
}

setTimeout( async() => { 
  sendMessages();
}, 3000);

client.login(process.env.DISCORD_PANCAKE_TOKEN);