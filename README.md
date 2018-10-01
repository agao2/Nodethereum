# Nodethereum
Custom node project that works with solidity based smart contracts. Allows for testing of contracts and deployment to public networks

## How to use
- to compile the contract written in solidity : `node compile`
- to deploy the contract to rinkeby network : `node deploy` 

## How to run tests
- Use `npm run test` in the inbox directory to run all mocha tests
- Use `node compile` in the inbox directory to compile the contract in the contracts directory

## Ifura API
- Used to get access to a node in the rinkeby network. This allows use to deploy contracts to a real network without needing actual real ether in the main ethereum network. The other option is to host our own node, a ethereum virtual machine locally but that takes too much time and effort (kinda a pain too actually), this way is just much easier =D . 
- Go to infura.io to signup for use


