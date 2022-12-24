function main() {
	console.log('begin programme');

	setTimeout(() => {
		console.log('3 seconds have passed');
	}, 3000);

	console.log('end programme');
}

module.exports.runTimer = () => {
	main();
};
