const parseArgs = require('minimist');
const command = parseArgs(process.argv.slice(2, 3));
const handleCommand = require('./handleComand')
delete command._
handleCommand(command)