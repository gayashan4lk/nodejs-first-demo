const nodeServer = require('./src/1_nodeserver');
const evnetLoop = require('./src/2_eventloop');
const callBacks = require('./src/callBacks');
const callBacks2 = require('./src/callBacks_2');
const timer = require('./src/callbacks-3-timers');
const promise = require('./src/callbacks-4-promises');

// run the examples
//nodeServer.runNodeServer();
//evnetLoop.runEventLoop();
//callBacks.runCallBacks();
//callBacks2.runCallBacks_2();
//timer.runTimer();
promise.runPromises();
