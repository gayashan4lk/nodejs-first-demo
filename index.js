const nodeServer = require('./src/1_nodeserver');
const hello = require('./src/2_eventloop');

// run the examples
nodeServer.runNodeServer();
hello.printHello();
