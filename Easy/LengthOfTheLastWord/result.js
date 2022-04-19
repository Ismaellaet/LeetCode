/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    const splitString = s.split(/\s/).filter((item) => item != "");
    const lastWord = splitString[splitString.length - 1];

    return lastWord.length // Return length of the last word
};