require("dotenv").config();


const ethers = require('ethers');
const addresses = require("./addresses");
const abis = require('./abis');

const version = "0.1.3";

const provider = new ethers.providers.WebSocketProvider(process.env.MATIC_PUBLIC_WS_URL_5);
const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);
const account = wallet.connect(provider);

const factory = new ethers.Contract(
  addresses.MATIC.quickswapFactory, abis.uniFactory, account
);

console.log("version", version);
console.log("listening for pairs created");

factory.on('PairCreated', async (token0, token1, pairAddress) => {
  console.log(`
    pair Created: ${token0} ---AND---- ${token1} pairAddress is: ${pairAddress}`);
});