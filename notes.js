// notes -> eat the blocks uniswap SDK  tut (217)
// https://github.com/jklepatch/eattheblocks/blob/master/screencast/217-uniswap-v2/javascript/index.js
// ================================================================================================

//{ ChainId, Fetcher, WETH, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk');
// const ethers = require('ethers');

// const chainId = ChainId.MAINNET;
// const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

// const init = async () => {
//   const dai = await Fetcher.fetchTokenData(chainId, tokenAddress);
//   const weth = WETH[chainId];
//   const pair = await Fetcher.fetchPairData(dai, weth);
//   const route = new Route([pair], weth);
//   const trade = new Trade(route, new TokenAmount(weth, '100000000000000000'), TradeType.EXACT_INPUT);
//   console.log(route.midPrice.toSignificant(6));
//   console.log(route.midPrice.invert().toSignificant(6));
//   console.log(trade.executionPrice.toSignificant(6));
//   console.log(trade.nextMidPrice.toSignificant(6));

//   const slippageTolerance = new Percent('50', '10000');
//   const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw;
//   const path = [weth.address, dai.address];
//   const to = '';
//   const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
//   const value = trade.inputAmount.raw;

//   const provider = ethers.getDefaultProvider('mainnet', {
//     infura: 'https://mainnet.infura.io/v3/ba14d1b3cfe5405088ee3c65ebd1d4db' 
//   });

//   const signer = new ethers.Wallet(PRIVATE_KEY);
//   const account = signer.connect(provider);
//   const uniswap = new ethers.Contract(
//     '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
//     ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'],
//     account
//   );
//   const tx = await uniswap.sendExactETHForTokens(
//     amountOutMin,
//     path,
//     to,
//     deadline,
//     { value, gasPrice: 20e9 }
//   );
//   console.log(`Transaction hash: ${tx.hash}`);

//   const receipt = await tx.wait();
//   console.log(`Transaction was mined in block ${receipt.blockNumber}`);
// }

// init();


// notes -> eat the blocks uniswap trading bot (322)  
// https://github.com/jklepatch/eattheblocks/blob/master/screencast/217-uniswap-v2/javascript/index.js
// ================================================================================================

// const ethers = require('ethers');

// const addresses = {
//   WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', 
//   router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
//   recipient: '0xf11b2fc4f28150517af11c2c456cbe75e976f663'
// }

// const mnemonic = 'your mnemonic here';

// const provider = new ethers.providers.WebSocketProvider('Infura websocket url to mainnet');
// const wallet = ethers.Wallet.fromMnemonic(mnemonic);
// const account = wallet.connect(provider);
// const factory = new ethers.Contract(
//   addresses.factory,
//   ['event PairCreated(address indexed token0, address indexed token1, address pair, uint)'],
//   account
// );
// const router = new ethers.Contract(
//   addresses.router,
//   [
//     'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
//     'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'
//   ],
//   account
// );

// factory.on('PairCreated', async (token0, token1, pairAddress) => {
//   console.log(`
//     New pair detected
//     =================
//     token0: ${token0}
//     token1: ${token1}
//     pairAddress: ${pairAddress}
//   `);

//   //The quote currency needs to be WETH (we will pay with WETH)
//   let tokenIn, tokenOut;
//   if(token0 === WETH) {
//     tokenIn = token0; 
//     tokenOut = token1;
//   }

//   if(token1 == WETH) {
//     tokenIn = token1; 
//     tokenOut = token0;
//   }

//   //The quote currency is not WETH
//   if(typeof tokenIn === 'undefined') {
//     return;
//   }

//   //We buy for 0.1 ETH of the new token
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



// My implementation, check everyblock if there is money! 

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


    // require("dotenv").config();

    // const { ChainId, Fetcher, WETH } = require('@uniswap/sdk');
    // const ethers = require('ethers');
    
    // const chainId = ChainId.MAINNET;
    // const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
    // const forceAddress = '0x6807D7f7dF53b7739f6438EABd40Ab8c262c0aa8';
    
    // const wsProvider = new ethers.providers.WebSocketProvider(process.env.INFURA_URL);
    
    // wsProvider.on('block', async (blockNumber) => {
    //   console.log('New Block: ' + blockNumber);
    
    //   const dai = await Fetcher.fetchTokenData(chainId, daiAddress);
    //   const force = await Fetcher.fetchTokenData(chainId, forceAddress);
    //   const weth = WETH[chainId];
    
    
    //   try {
    //     const pair = await Fetcher.fetchPairData(dai, weth);
    //     const token0_amount = pair.reserve0.toSignificant(6);
    //     const token1_amount = pair.reserve1.toSignificant(6);
    //     console.log(token0_amount); 
    //     console.log(token1_amount); 
    //   } catch(error){
    //     // should go here if the pair does not exist
    //     console.log("Pair does not exist");
    //     console.log(error);
    //   }
    
    // });