const account = require('./account');
const ethers = require('ethers');

exports.getContract = (address, abi) => {
  return new ethers.Contract(address, abi, account); 
};

exports.getPath = (token0, token1, basePairAddress) => {
  let tokenIn, tokenOut;
  if(token0 === basePairAddress) {
    tokenIn = token0; 
    tokenOut = token1;
  }
  
  if(token1 == basePairAddress) {
    tokenIn = token1; 
    tokenOut = token0;
  }
  return [tokenIn, tokenOut];
}