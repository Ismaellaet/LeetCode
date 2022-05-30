# Monotonic Array

An array is **monotonic** if it is either monotone increasing or monotone decreasing.

An array _nums_ is monotone increasing if for all _i <= j_, _nums[i] <= nums[j]_. An array _nums_ is monotone decreasing if for all _i <= j_, _nums[i] >= nums[j]_.

Given an integer array _nums_, return _true_ if the given array is monotonic, or _false_ otherwise.

### Example 1:

    Input: nums = [1,2,2,3]
    Output: true

### Example 2:

    Input: nums = [6,5,4,4]
    Output: true

### Example 3:

    Input: nums = [1,3,2]
    Output: false
