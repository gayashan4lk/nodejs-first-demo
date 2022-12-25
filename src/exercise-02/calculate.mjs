function calcTwoNumbers(num1, num2, callback) {
	const result = callback(num1, num2);
	console.log(result);
}

function CalculateTwoNumbers() {
	calcTwoNumbers(10, 11, (num1, num2) => num1 + num2);
	calcTwoNumbers(3, 5, (num1, num2) => num1 * num2);
}

function calculate(x, y, command) {
	if (command == 'add') calcTwoNumbers(x, y, (num1, num2) => num1 + num2);

	if (command == 'multiply') calcTwoNumbers(x, y, (num1, num2) => num1 * num2);
}

function Calculate() {
	calculate(111, 222, 'add');
	calculate(111, 3, 'multiply');
}

export { CalculateTwoNumbers, Calculate };
