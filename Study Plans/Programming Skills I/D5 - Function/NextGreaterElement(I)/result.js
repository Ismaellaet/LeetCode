/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
    let greaterElements = []; // Store the next greater greaterElements

    for (i = 0; i < nums1.length; i++) {
        const indexOfValue = nums2.indexOf(nums1[i]);

        for (j = indexOfValue; j < nums2.length; j++) { // j equals the index of the value of nums[i]

            if (nums2[j] > nums1[i]) {
                greaterElements.push(nums2[j]); // Add the number in greaterElements
                break; // Add ONLY the FIRST greater number
            }

            if (j === nums2.length - 1) { // If condition is true, it means that there is no greater number
                greaterElements.push(-1) // Add -1 in greaterElements
            }
        }
    }

    return greaterElements
};