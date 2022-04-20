/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    let lastDigitIndex = digits.length - 1; // Get index of the last digit

    function checkIfIsNine() {
        // Check if the last digit is 9
        if (digits[lastDigitIndex] == 9) {
            digits[lastDigitIndex] = 0; // Replace last digit to 0

            if (!digits[lastDigitIndex - 1]) {
                digits.unshift(1) // Add the digit 1 at the start of digits
            }

            lastDigitIndex-- // Decrements lastDigitIndex

            checkIfIsNine() // Recursive function
        }
    }

    checkIfIsNine()

    // Check if the last digit is different from 9
    if (digits[lastDigitIndex] != 9) {
        digits[lastDigitIndex] += 1; // last digit + 1
    }

    return digits
};

