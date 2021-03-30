// all the methods to check stuff go here 

exports.checkIfBasePair = (basePairAddress, token0, token1) => {  
  return [token0, token1].includes(basePairAddress)
};

