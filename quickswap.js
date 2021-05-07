require("dotenv").config();

const ethers = require('ethers');
const addresses = require("./addresses");
const abis = require('./abis');
const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();
    
const version = "0.1.3";

const provider = new ethers.providers.WebSocketProvider(process.env.MATIC_QUICKNODE_WS_URL);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
const account = wallet.connect(provider);

const factory = new ethers.Contract(
  addresses.MATIC.quickswapFactory, abis.uniFactory, account
);

const NOTIFICATION_CHANNEL_ID = '840341906642567188';

console.log("version", version);
console.log("listening for pairs created");
console.log("account is", account.address);

factory.on('PairCreated', async (token0, token1, pairAddress) => {
  let message = `pair Created: ${token0} ---AND---- ${token1} pairAddress is: ${pairAddress}`;
  console.log(message);
  // send to telegram 
  axios({
    method: 'post',
    url: process.env.TELEGRAM_QUICK_BOT_URL, 
    params: {},
    data: {"tokenA":token0,"tokenB":token1,"pair address": pairAddress}
  })  
  // send to discord 
  const channel = await client.channels.fetch(NOTIFICATION_CHANNEL_ID);
  channel.send(message);
});

client.login(process.env.DISCORD_QUICKSWAP_TOKEN);