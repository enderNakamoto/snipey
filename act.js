exports.logNewPair = (token0, token1, pairAddress) => {
  console.log(`
  New Pairs have been created on Uniswap 
  token0: ${token0}
  token1: ${token1}
  pairAddress: ${pairAddress}
  `);
};