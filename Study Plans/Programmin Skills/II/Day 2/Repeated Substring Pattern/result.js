/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	const copyS = s + s;
	const stringPart = copyS.substring(1, copyS.length - 1);

	return stringPart.includes(s);
};
