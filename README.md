# snipey
STEP 1: Install dependencoes

```
npm install
```

STEP 2: add matic websocket endpoint and account mnemonic

```
MATIC_PUBLIC_WS_URL_5=wss://matic-mainnet-archive-ws.bwarelabs.com
MNEMONIC=your_mnemonic_here
```
make sure the .env file does not get pushed to github, it has access to your eth account
add .env to .gitignore

STEP 3 : Run the code 

```
node main.js
````
