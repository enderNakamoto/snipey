require("dotenv").config();

const addresses = require('./addresses');
const abis = require('./abis');
const helpers = require('./helpers');
const check =  require('./check');
const act = require('./act');

// parameters 
debug = true;
basePairAddress = addresses.WETH;
amountBase = 0.1; // 0.1 ETH to be swapped
waitInMinutes = 5; // tx waits for 5 minutes
admin = addresses.admin; 


// the third param account is passed in by default in helpers.getContract;
const factory = helpers.getContract(addresses.uniFactory, abis.uniFactory);
const router = helpers.getContract(addresses.UniRouter, abis.UniRouter); 


// the main loop subsrives to an event 
factory.on('PairCreated', async (token0, token1, pairAddress) => {
  debug && act.logNewPair(token0, token1, pairAddress); 
  // check for basePair, if basepair found we can do the swap 
  if(check.checkIfBasePair(basePairAddress, token0, token1)){
    [tokenIn, tokenOut] = helpers.getPath(token0, token1, basePairAddress); 
    debug && console.log(`we will swap ${tokenIn} for ${tokenOut}`);
    // conditons met, let's swap!
    act.swap(amountBase, router, tokenIn, tokenOut, waitInMinutes, slippage, admin, debug);
  }
  debug && console.log("we don't support the basepair");
});
