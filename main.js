require("dotenv").config();

const addresses = require('./addresses');
const abis = require('./abis');
const helpers = require('./helpers');
const check =  require('./check');
const act = require('./act');

// parameters 
debug = true;
basePairAddress = addresses.WETH;

const UniFactory = helpers.getContract(addresses.uniFactory, abis.uniFactory); 

// the main loop subsrives to an event 
UniFactory.on('PairCreated', async (token0, token1, pairAddress) => {
  debug && act.logNewPair(token0, token1, pairAddress); 
  // check for basePair, if basepair found we can do the swap 
  if(check.checkIfBasePair(basePairAddress, token0, token1)){
    [tokenIn, tokenOut] = helpers.getPath(token0, token1, basePairAddress); 
    debug && console.log(`we will swap ${tokenIn} for ${tokenOut}`);
  }
  debug && console.log("we don't support the basepair");
});
