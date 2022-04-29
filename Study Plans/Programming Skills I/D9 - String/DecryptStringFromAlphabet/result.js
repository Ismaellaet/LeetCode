/**
 * @param {string} s
 * @return {string}
 */

var freqAlphabets = function (s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let sMapped = "";

    for (i = 0; i < s.length; i++) {
        let indexOfLetter = s[i] - 1

        if (s[i + 2] === "#") {
            indexOfLetter = (s[i] + s[i + 1]) - 1;

            sMapped += alphabet[indexOfLetter];
            i += 2

            continue;
        }

        sMapped += alphabet[indexOfLetter]
    }

    return sMapped
};

console.log(freqAlphabets("10#11#12"))