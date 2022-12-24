function main() {
	const fs = require('fs');
	// This file path is relative to the index.js, which is the entry point of the programme
	filePath = './static/input.txt';

	// This function reads file and logs its contents to the console
	function readFile(filePath) {
		fs.readFile(filePath, (error, data) => {
			if (error) console.error(error);
			else console.log(data.toString());
		});
	}

	// this function schedules the readFile() function to be called in 1 second
	setTimeout(() => {
		readFile(filePath);
	}, 1000);

	console.log('starting event loop');
}

module.exports.runEventLoop = () => {
	main();
};
