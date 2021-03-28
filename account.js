require("dotenv").config();
const ethers = require('ethers');

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WS_URL);
const wallet = ethers.Wallet.fromMnemonic(process.env.ADMIN_MNEMONIC);
const account = wallet.connect(provider);

module.exports = account; 