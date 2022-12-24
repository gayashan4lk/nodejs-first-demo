function XmlHttpRequestCallback() {
	const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
	filepath = './static/data.json';

	function makeRequest(url, callback) {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			console.log(xhr.statusText);
			callback(xhr.responseText);
		};
		xhr.open('GET', url, true);
		xhr.send();
	}

	makeRequest(filepath, (response) => {
		console.log(response);
	});
}

module.exports = XmlHttpRequestCallback;
