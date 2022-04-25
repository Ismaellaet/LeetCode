/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
    let differentLetterIndices = []; // Store the index of the different letters

    if (s1 === s2) { return true } // Checks if s1 equals s2

    for (i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            differentLetterIndices.push(i) // Add the index in differentLetterIndices
        }

        // Checks if it has more than 2 different letter
        if (differentLetterIndices.length > 2) { return false }
    }

    // Checks if it is possible to make both strings with a swap
    if (s1[differentLetterIndices[0]] === s2[differentLetterIndices[1]] && s1[differentLetterIndices[1]] === s2[differentLetterIndices[0]]) {
        return true
    } else {
        return false
    }
};
