/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {
    let odd = []; // Odd length subarrays
    let total = 0; // Total of the sum of all odd-length subarrays

    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            odd.push(arr[j]); // Add the value in odd[]

            // Checks if odd.length is odd
            if (odd.length % 2 !== 0) {
                total += odd.reduce((a, b) => a + b) // Adds the sum of the odd[] values to the total
            }
        }
        odd.length = 0; // Clear odd[]
    }

    return total
};
