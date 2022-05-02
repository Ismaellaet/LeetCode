/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0;

    for (i = left; i <= right; i++) {
        sum += this.nums[i];
    }

    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2))
console.log(numArray.sumRange(2, 5))
console.log(numArray.sumRange(0, 5))