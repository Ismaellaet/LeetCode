/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
    let wordMerged = "";
    let largestLength = getLargestLength();

    for (i = 0; i < largestLength; i++) {

        if (word1[i] == undefined) {
            wordMerged += word2[i];
            continue;
        }

        if (word2[i] == undefined) {
            wordMerged += word1[i];
            continue;
        }

        wordMerged += word1[i];
        wordMerged += word2[i];
    }

    function getLargestLength() {
        const word1Length = word1.length;
        const word2Length = word2.length;

        return Math.max(word1Length, word2Length);
    }

    return wordMerged
};