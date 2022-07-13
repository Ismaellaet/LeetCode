/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	const number = (BigInt(digits.join("")) + BigInt(1)).toString();

	return number.split("");
};
