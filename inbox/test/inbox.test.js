const assert = require('assert') //assert built into node btw
const ganache = require('ganache-cli');
//Web3 is a constructor, used to create instances. Thats why it is capitalized
const Web3 = require('web3');
// web3 is how javascript communicates to an ethereum network
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // use an account to deploy contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hello world!'] })
        .send({ from: accounts[0], gas: '1000000' });

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
     });
});

