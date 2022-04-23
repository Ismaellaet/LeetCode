/**
 * @param {number[]} nums
 * @return {number}
 */

var largestPerimeter = function (nums) {
    const numsDescendingOrder = nums.sort((a, b) => b - a); // Sorted nums in descending order

    for (i = 0; i < nums.length - 2; i++) {
        const conditionOfExistenceOfTriangle = nums[i] < nums[i + 1] + nums[i + 2]; // The sum of two numbers must be greater than the third number
        const perimeterTriangle = nums[i] + nums[i + 1] + nums[i + 2]; // Perimeter of a triangle

        if (conditionOfExistenceOfTriangle) {
            return perimeterTriangle
        }
    }

    return 0 // It is impossible to form any triangle
};