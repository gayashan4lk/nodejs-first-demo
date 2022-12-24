function main() {
	function loadImage(url) {
		return new Promise(function (resolve, reject) {
			const image = new Image();
			image.onload = function () {
				resolve(image);
			};
			image.onerror = function () {
				reject(new Error(`Failed to load image at ${url}`));
			};
			image.src = url;
		});
	}

	loadImage('/image.jpg')
		.then(function (image) {
			console.log('Image loaded successfully.');
			document.body.appendChild(image);
		})
		.catch(function (error) {
			console.error(error);
		});
}

module.exports.runPromises = () => {
	main();
};
