/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    function countBits(num) {
        const bits = num.toString(2).replace(/0/g, ""); // Convert number to binary and replace all 0s to ""

        return bits.length; // Number of bits
    }

    // Sort array by number of bits
    return arr.sort((a, b) => countBits(a) - countBits(b) || a - b)
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))