require('events').EventEmitter.defaultMaxListeners = 15;
const assert = require('assert') //assert built into node btw
const ganache = require('ganache-cli');
//Web3 is a constructor, used to create instances. Thats why it is capitalized
const Web3 = require('web3');


// web3 is how javascript communicates to an ethereum network
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');


let accounts;
let inbox;
const INITIAL_STRING = 'Hello World!'

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // use an account to deploy contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
        .send({ from: accounts[0], gas: '1000000' });

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        // inbox = instance of the contract
        // methods = an object of all the public functions
        // message is a property, the first set of parenthesis takes in parameters and the second
        // set is used to custominze the transaction
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });

    it('can change the message', async () => {
        // send() takes an account, that account is paying for the transaction
        await inbox.methods.setMessage('hello').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'hello');
    })
});

