function NodeServer() {
	const http = require('http');

	const server = http.createServer((req, res) => {
		res.end('Hello world!');
	});

	server.listen(3000, () => {
		console.log('Server is running on localhost:3000');
	});
}

module.exports = NodeServer;
