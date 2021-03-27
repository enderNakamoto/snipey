   /* 
   TOKEN RESPONSE 
  Token {
      decimals: 18,
      symbol: undefined,
      name: undefined,
      chainId: 1,
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
    }
   */


   /* 
   PAIR RESPONSE 
    Pair {
      liquidityToken: Token {
        decimals: 18,
        symbol: 'UNI-V2',
        name: 'Uniswap V2',
        chainId: 1,
        address: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11'
      },
      tokenAmounts: [
        TokenAmount {
          numerator: [JSBI],
          denominator: [JSBI],
          currency: [Token],
          token: [Token]
        },
        TokenAmount {
          numerator: [JSBI],
          denominator: [JSBI],
          currency: [Token],
          token: [Token]
        }
      ]
    }
   */


    require("dotenv").config();

    const { ChainId, Fetcher, WETH } = require('@uniswap/sdk');
    const ethers = require('ethers');
    
    const chainId = ChainId.MAINNET;
    const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
    const forceAddress = '0x6807D7f7dF53b7739f6438EABd40Ab8c262c0aa8';
    
    const wsProvider = new ethers.providers.WebSocketProvider(process.env.INFURA_URL);
    
    wsProvider.on('block', async (blockNumber) => {
      console.log('New Block: ' + blockNumber);
    
      const dai = await Fetcher.fetchTokenData(chainId, daiAddress);
      const force = await Fetcher.fetchTokenData(chainId, forceAddress);
      const weth = WETH[chainId];
    
    
      try {
        const pair = await Fetcher.fetchPairData(dai, weth);
        const token0_amount = pair.reserve0.toSignificant(6);
        const token1_amount = pair.reserve1.toSignificant(6);
        console.log(token0_amount); 
        console.log(token1_amount); 
      } catch(error){
        // should go here if the pair does not exist
        console.log("Pair does not exist");
        console.log(error);
      }
    
    });