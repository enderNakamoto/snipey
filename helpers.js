const account = require('./account');
const ethers = require('ethers');

exports.getContract = (address, abi) => {
  return new ethers.Contract(address, abi, account); 
};