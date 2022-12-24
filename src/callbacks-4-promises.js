function main() {
	const { Image, createCanvas } = require('canvas');
	const fs = require('fs');
	const out = fs.createWriteStream('newImage.png');

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

	loadImage('image.jpg')
		.then(function (image) {
			console.log(image.toString());
			console.log('Image loaded successfully.');

			const canvas = createCanvas(image.width, image.height);
			const ctx = canvas.getContext('2d');

			ctx.drawImage(image, 0, 0);
			const out = fs.createWriteStream('newImage.png');
			canvas.createPNGStream().pipe(out);
			out.on('finish', function () {
				console.log('Image saved successfully');
			});
		})
		.catch(function (error) {
			console.error(error);
		});
}

module.exports.runPromises = () => {
	main();
};
