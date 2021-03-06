const addresses = {
  ETH:{
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    uniFactory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', 
    uniRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  }, 
  BSC: {
    pancakeFactory: '0xBCfCcbde45cE874adCB698cC183deBcF17952812', 
    pancakeRouter: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F'
  }, 
  MATIC: {
    quickswapFactory: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    quickSwapRouter: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'
  }
}

module.exports = addresses;