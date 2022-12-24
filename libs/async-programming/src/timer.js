function Timer() {
	console.log('begin programme');

	// setTimeout function schedules the anonymous callback function to run after 3 seconds
	setTimeout(() => {
		console.log('3 seconds have passed');
	}, 3000);

	console.log('end programme');
}

module.exports = Timer;
