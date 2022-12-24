function main() {
	function greet(name, callback) {
		console.log(`Hello, my name is ${name} !`);
		callback();
	}

	function sayGoodBye() {
		console.log('Good bye!');
	}

	function sayNiceToMeetYou() {
		console.log('Nice to meet you.');
	}

	greet('John', sayGoodBye);
	greet('Johnny', sayNiceToMeetYou);
}

module.exports.runCallBacks = () => {
	main();
};
