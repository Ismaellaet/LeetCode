var search = function(nums, target) {
    let right = nums.length - 1;
    let left = 0;
    
    while(left <= right) {
        let mid = left + Math.floor((right - left + 1) / 2);
        
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
            right = mid - 1;  
        } else {
            left = mid + 1;
        }
    }
    return -1
};