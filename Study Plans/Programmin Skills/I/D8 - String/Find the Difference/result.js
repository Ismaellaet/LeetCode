/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let letters = "";

    for (i = 0; i < s.length; i++) {

        if (t.includes(s[i])) {
            t = t.replace(s[i], "");
        }
    }

    return t
};

console.log(findTheDifference("abcd", "abcde"))