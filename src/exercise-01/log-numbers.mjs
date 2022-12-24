function LogNumbers() {
	for (let i = 1; i <= 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000 * i);
	}
}

function LogNumbersWithSetInterval() {
	let number = 1;

	const id = setInterval(() => {
		console.log(number);
		if (number === 10) {
			clearInterval(id);
		}
		number++;
	}, 1000);
}

export { LogNumbers, LogNumbersWithSetInterval };
