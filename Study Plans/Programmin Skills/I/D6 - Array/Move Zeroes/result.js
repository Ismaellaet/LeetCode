/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    let index = 0;

    for (i = 0; i < nums.length; i++) {
        // Checks if nums[i] is non-zero number
        if (nums[i] !== 0) {
            nums[index] = nums[i]; // Replace the number of position index to the number of position i
            index++
        }
    }

    for (i = index; i < nums.length; i++) {
        nums[i] = 0; // Replaces all numbers from the position index by 0
    }

    return nums
};

console.log(moveZeroes([0, 1, 0]))