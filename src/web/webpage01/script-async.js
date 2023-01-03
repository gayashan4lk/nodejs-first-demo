async function fetchProducts() {
	try {
		const response = await fetch(
			'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
		);
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(`Could not get products: ${error}`);
	}
}

// async function always returns a promise.
document.querySelector('#myAsync').addEventListener('click', () => {
	fetchProducts().then((data) => {
		if (data) {
			console.log(data);
		} else {
			console.log('error fetching products.');
		}
	});
});
