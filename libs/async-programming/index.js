// module.exports = {
// 	NodeServer: require('./src/nodeserver'),
// 	EventLoop: require('./src/eventLoop'),
// 	SimpleCallback: require('./src/simpleCallback'),
// 	XmlHttpRequestCallback: require('./src/xmlHttpRequest'),
// 	Timer: require('./src/timer'),
// 	SimplePromise: require('./src/simplePromise'),
// };

const NodeServer = require('./src/nodeserver');
const EventLoop = require('./src/eventLoop');

exports.NodeServer = NodeServer;
exports.EventLoop = EventLoop;
