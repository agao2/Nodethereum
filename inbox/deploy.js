const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'matrix able father symptom embrace acquire raw gasp success junior key shoulder',
    'https://rinkeby.infura.io/v3/102bb8210bce438585f837f95742f427'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode , arguments: ['Initial Deploy Message']})
    .send( {gas :'1000000', from : accounts[0]});

    console.log('Contract deployed to' , result.options.address);
};

deploy();