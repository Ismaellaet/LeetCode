/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    for (index = 0; index < strs[0].length; index++) {
        for (let phrase of strs) {
            if (phrase[index] !== strs[0][index]) {
                return phrase.slice(0, index);
            }
        }
    }

    return strs[0]
};