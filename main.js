require("dotenv").config();

const addresses = require('./addresses');
const abis = require('./abis');
const helpers = require('./helpers');
const check =  require('./check');
const act = require('./act');

const UniFactory = helpers.getContract(addresses.uniFactory, abis.uniFactory); 

// the main loop that triggers the act() based on check() 
UniFactory.on('PairCreated', async (token0, token1, pairAddress) => {
  act.logNewPair(token0, token1, pairAddress); 
}