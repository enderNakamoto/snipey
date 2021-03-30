exports.logNewPair = (token0, token1, pairAddress) => {
  console.log(`
  New Pairs have been created on Uniswap 
  token0: ${token0}
  token1: ${token1}
  pairAddress: ${pairAddress}
  `);
};





//   const amountIn = ethers.utils.parseUnits('0.1', 'ether');
//   const amounts = await router.getAmountsOut(amountIn, [tokenIn, tokenOut]);
//   //Our execution price will be a bit different, we need some flexbility
//   const amountOutMin = amounts[1].sub(amounts[1].div(10));
//   console.log(`
//     Buying new token
//     =================
//     tokenIn: ${amountIn.toString()} ${tokenIn} (WETH)
//     tokenOut: ${amounOutMin.toString()} ${tokenOut}
//   `);
//   const tx = await router.swapExactTokensForTokens(
//     amountIn,
//     amountOutMin,
//     [tokenIn, tokenOut],
//     addresses.recipient,
//     Date.now() + 1000 * 60 * 10 //10 minutes
//   );
//   const receipt = await tx.wait(); 
//   console.log('Transaction receipt');
//   console.log(receipt);