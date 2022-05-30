/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  for (i = 0; i < nums.length; i++) {
    let j = i + 1;

    if (nums[i] == nums[j]) continue; 

    return nums[i] > nums[j] ? decreasing() : increasing(); 
  }

  return true;

  function increasing() {
    for (i = 0; i < nums.length; i++) {
      let j = i + 1;

      if (nums[i] > nums[j]) {
        return false
      };
    }

    return true;
  }
  function decreasing() {
    for (i = 0; i < nums.length; i++) {
      let j = i + 1;

      if (nums[i] < nums[j]) {
        return false
      };
    }

    return true;
  }
};