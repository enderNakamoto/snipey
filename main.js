require("dotenv").config();

const ethers = require('ethers');
const addresses = require('./addresses');
const abis = require('./abis');

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WS_URL);
const wallet = new ethers.Wallet(process.env.MATIC_PUBLIC_WS_URL_5, provider);
const account = wallet.connect(provider);

console.log("Address is ", wallet.address);

module.exports = account; 

// the third param account is passed in by default in helpers.getContract;
const factory = helpers.getContract(addresses.MATIC.quickswapFactory, abis.uniFactory);
const router = helpers.getContract(addresses.MATIC.quickswapFactory, abis.UniRouter); 

// the main loop subsrives to an event 
factory.on('PairCreated', async (token0, token1, pairAddress) => {
  console.log(`New pair created with: ${token0}  ---AND--- ${token1}  with pairAddress: ${pairAddress}`);
});
