/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    for (i = 0; i < words.length - 1; i++) { // Loop for words

        for (j = 0; j < words[i].length; j++) { // Loop for letters

            if (words[i][j] == words[i + 1][j]) { // Checks if the letters are the same
                continue;
            }

            if (order.indexOf(words[i][j]) < order.indexOf(words[i + 1][j])) { // Checks if index of letter of words[i] < index of letter of words[i + 1]
                break;
            }

            return false;
        }
    }

    return true;
};