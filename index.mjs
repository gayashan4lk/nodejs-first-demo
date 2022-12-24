import {
	NodeServer,
	EventLoop,
	SimpleCallback,
	SimplePromise,
	Timer,
	XmlHttpRequestCallback,
} from 'gaya-learn-async-programming';
import { AsyncAwait } from './src/async-await.mjs';
import {
	LogNumbers,
	LogNumbersWithSetInterval,
	LogRandomNumber,
} from './src/exercise-01/log-numbers.mjs';
import { CalculateTwoNumbers } from './src/exercise-02/calculate.mjs';

//NodeServer();
//EventLoop();
//SimpleCallback();
//SimplePromise();
//Timer();
//XmlHttpRequestCallback();
//AsyncAwait('./static/input.txt');
//LogNumbers();
//LogNumbersWithSetInterval();
//LogRandomNumber();
CalculateTwoNumbers(5, 8, (num1, num2) => {
	console.log(num1 + num2);
});

CalculateTwoNumbers(2, 10, (num1, num2) => {
	console.log(num1 * num2);
});
