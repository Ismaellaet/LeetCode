/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let string = s + s;

    return string.substring(1, string.length-1)
};