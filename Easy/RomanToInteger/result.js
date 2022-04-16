const symbolsValue = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    let result = 0;
    for (i = 0; i < s.length; i++) {
        if (symbolsValue[s[i]] < symbolsValue[s[i + 1]]) { // Check if the next symbol is smaller 
            result += symbolsValue[s[i + 1]] - symbolsValue[s[i]] // Add in result the subtraction of the next symbol with current symbol
            i++ // Increment i because the next symbol has already been subtracted
        } else {
            result += symbolsValue[s[i]] // Add in result the current symbol
        }
    }

    return result
};