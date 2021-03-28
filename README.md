# snipey
STEP 1: Install dependencoes

```
npm install
```

STEP 2: get infura websocket endpoint from https://infura.io/

get infura websocket endpoint, make a .env file and fill it up in the format 

```
INFURA_URL=wss://mainnet.infura.io/ws/v3/your-id-here
ADMIN_ADDRESS=checksummed admin address here
ADMIN_MNEMONIC=mnemonic of the admin address
```
make sure the .env file does not get pushed to github, it has access to your eth account

STEP 3 : Run the code 

```
node main.js
````

You should have node and npm install already 
----------------------------------------------------------------------------------------------------
## Structure of the bot - Bot modules

Every bot has a loop, check and do, loop is subscribing to am event ( Actualy contract Event or per block using websockets)

`main.js` has the loop that does something (logic in act.js) based on checks (logic in check.js)

In addition to 
* check.js -> logic functions to check if the bot has a favorable condition to act 
* act.js -> log for what the bot does when favorable conditions are met

We have the following helper files: 
* abis.js -> hold all human readable ether abis
* addresses.js -> all the  addresses needed for the bots 
* account.js -> setup the ethers account with provider 
* helpers.js -> misc helper functions 