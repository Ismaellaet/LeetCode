/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort(); // Sort nums

    for (i = 0; i < nums.length - 1; i++) {

        if (nums[i] === nums[i + 1]) { // Checks if the number is equal to the next number
            return true
        }
    }

    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))