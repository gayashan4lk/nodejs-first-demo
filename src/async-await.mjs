import { readFile } from 'node:fs';

function AsyncAwait() {
	//const fs = require('fs');
	const filePath = './static/input.txt';

	function readMyFile(filePath) {
		return new Promise((resolve, reject) => {
			readFile(filePath, (err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	}

	async function logMyFileContents(filePath) {
		try {
			const data = await readMyFile(filePath);
			console.log(data.toString());
		} catch (err) {
			console.error(err);
		}
	}

	logMyFileContents(filePath);
}

export { AsyncAwait };
