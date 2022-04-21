/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 let nums = [1, 3, 5, 6, 7, 8, 10];
 let target = 1;
 
 var searchInsert = function (nums, target) {
     let start = 0;
     let end = nums.length - 1;
     let index = -1;
 
     while (start <= end) {
         let mid = start + Math.floor((end - start + 1) / 2);
 
         if (nums[mid] === target) {
             index = mid;
             start = mid + 1
         } else if (nums[mid] > target) {
             end = mid - 1;
         } else {
             start = mid + 1;
         }
     }
 
     if (index === -1) {
         return start;
     } else {
         return index;
     }
 };