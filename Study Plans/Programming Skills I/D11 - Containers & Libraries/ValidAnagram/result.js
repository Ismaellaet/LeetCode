/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) { // Compare the two sorted strings 
    return s.split("").sort().join("") === t.split("").sort().join("")
};

console.log(isAnagram("abc", "abc"))