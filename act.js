exports.logNewPair = (token0, token1, pairAddress) => {
  console.log(`
  New Pairs have been created on Uniswap 
  token0: ${token0}
  token1: ${token1}
  pairAddress: ${pairAddress}
  `);
};


exports.swap = (amount, router, tokenIn, tokenOut, waitInMinutes, admin, debug) => {
  const amountIn = ethers.utils.parseUnits(amount, 'ether');
  // the router.getAmountspout() gives an array back, amounts out is the last element
  const amountOut = await router.getAmountsOut(amountIn, [tokenIn, tokenOut])[1];
  const amountOutMin = amountOut.sub(amountOut.div(10));

  debug &&  console.log(`
  ========= we will try to swap =========
  base: ${amountIn.toString()} for 
  tokenOut: ${amounOutMin.toString()} 
  `);

  const waitTill = Date.now() + 1000 * 60 * waitInMinutes;
  const tx = await router.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    [tokenIn, tokenOut],
    admin,
    waitTill
  );
  const receipt = await tx.wait(); 
  debug && console.log('transaction receipt', receipt);
  debug && console.log(' ====== Transaction mined ======');
}