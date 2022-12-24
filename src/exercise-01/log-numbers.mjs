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

function LogRandomNumber() {
	for (let i = 1; i <= 10; i++) {
		setTimeout(() => {
			console.log(generateRandomArray()[i - 1]);
		}, 1000 * i);
	}
}

function generateRandomArray() {
	let numbers = [];

	while (numbers.length < 10) {
		let random = Math.floor(Math.random() * 10);
		if (!numbers.some((n) => n == random)) {
			numbers.push(random);
		}
	}

	return numbers;
}

export { LogNumbers, LogNumbersWithSetInterval, LogRandomNumber };
