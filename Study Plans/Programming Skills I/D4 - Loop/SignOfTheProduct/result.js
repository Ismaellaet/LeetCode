/**
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function (nums) {
    const product = nums.reduce((prev, curr) => prev * curr);

    // Checks if there is 0 in the nums
    if (nums.includes(0)) return 0;

    // Checks if the product is positive or negative
    return product > 0 ? 1 : -1;
};
