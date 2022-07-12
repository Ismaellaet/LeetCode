/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (!needle) return 0; // Check if needle is an empty string
	if (!haystack.includes(needle)) return -1; // Check if needle exists in haystack

	return haystack.indexOf(needle);
};
