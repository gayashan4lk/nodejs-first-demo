function sendRequest() {
	const fetchPromise = fetch(
		'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
	);

	console.log(fetchPromise);

	fetchPromise.then((response) => {
		console.log(`Received response: ${response.status}`);
	});

	console.log('Started request…');
}

document.querySelector('#send').addEventListener('click', () => {
	sendRequest();
});

document.querySelector('#reload').addEventListener('click', () => {
	document.location.reload();
});
