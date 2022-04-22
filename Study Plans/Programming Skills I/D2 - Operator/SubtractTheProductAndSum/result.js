/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const digits = String(n).split(""); // Get each digit (transforms to String)
    const sum = digits.reduce((prev, current) => Number(prev) + Number(current)); // Get the sum of digits
    const product = digits.reduce((prev, current) => Number(prev) * Number(current)); // Get the product of digits

    return product - sum // Returns the difference between product and sum
};