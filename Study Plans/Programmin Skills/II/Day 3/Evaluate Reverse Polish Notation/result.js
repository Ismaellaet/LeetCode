/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const operators = {
		"+": (num1, num2) => {
			expression.push(num1 + num2);
		},
		"-": (num1, num2) => {
			expression.push(num2 - num1);
		},
		"*": (num1, num2) => {
			expression.push(num1 * num2);
		},
		"/": (num1, num2) => {
			expression.push(Math.trunc(num2 / num1));
		},
	};

	let expression = [];

	for (i = 0; i < tokens.length; i++) {
		if (!operators[tokens[i]]) {
			expression.push(+tokens[i]);
		}

		if (operators[tokens[i]]) {
			const num1 = expression.pop();
			const num2 = expression.pop();
			operators[tokens[i]](num1, num2);
		}
	}

	return expression;
};
