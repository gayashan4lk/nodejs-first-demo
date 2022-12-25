const url =
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const badUrl =
	'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

function sendRequest_v1(url) {
	const fetchPromise = fetch(url);
	console.log(fetchPromise);
	fetchPromise.then((response) => {
		console.log(`Received response: ${response.status}`);
		const jsonPromise = response.json();
		jsonPromise
			.then((data) => {
				console.log(data);
				console.log(data[0]);
				console.log(data[0].name);
			})
			.catch((error) => {
				console.error(error);
			});
	});
	console.log('Started request…');
}

function sendRequest_v2(url) {
	const fetchPromise = fetch(url);
	fetchPromise
		.then((response) => {
			console.log(response);
			console.log(response.status);
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
	console.log('Started request…');
}

function sendRequest_v3(url) {
	const fetchPromise = fetch(url);
	fetchPromise
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.error(`Could not get products: ${err}`);
		});
}

document.querySelector('#send_v1').addEventListener('click', () => {
	sendRequest_v1(url);
});

document.querySelector('#send_v2').addEventListener('click', () => {
	sendRequest_v2(url);
});

document.querySelector('#send_v3').addEventListener('click', () => {
	sendRequest_v3(url);
});

document.querySelector('#send_v3_bad-url').addEventListener('click', () => {
	sendRequest_v3(badUrl);
});

document.querySelector('#reload').addEventListener('click', () => {
	document.location.reload();
});
