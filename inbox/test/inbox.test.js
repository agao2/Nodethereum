const assert = require('assert') //assert built into node btw
const ganache = require('ganache-cli');
//Web3 is a constructor, used to create instances. Thats why it is capitalized
const Web3 = require('web3');
// web3 is how javascript communicates to an ethereum network
const web3 = new Web3(ganache.provider());


beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts)
        });
})

describe('Inbox' , () => {
    it('deploys a contract' , () => {});
});

