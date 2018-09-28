const path = require('path');
const fs = require('fs');
const solc = require('solc');

// __dirname is a constant defined by node that is always set to the current working directory
// the path below points directly to the inbox.sol file
const inboxPath = path.resolve(__dirname, 'contracts' , 'Inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source,1));


