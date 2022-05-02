/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
    const sortArray = arr.sort((a, b) => a - b) // Sort array
    const commomDifference = arr[arr.length - 1] - arr[arr.length - 2] // Get the commom difference

    return arr.every((element, index) => { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
        if (index < arr.length - 1) { // Avoids doing the function on last element
            return element + commomDifference === arr[index + 1] ? true : false // Checks if element plus commom difference is equal the next element
        }

        return true
    })
};