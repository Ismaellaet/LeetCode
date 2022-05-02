/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    const numberOf1 = n.toString(2).match(/1/g); // Get digit 1 in binary representation

    if (!numberOf1) { // Check if numberOf1 is null
        return 0
    }

    return numberOf1.length // Return the quantity of digit 1
};