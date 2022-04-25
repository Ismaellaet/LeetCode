/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
    let savedNumbers = []; // Stores saved numbers

    while (n !== 1 && !savedNumbers.includes(n)) { // n is different from 1 and number isn't saved
        let realDigits = n.toString().split("").map(Number);  // Separate digits
        savedNumbers.push(n); // Saves the number

        for (i = 0; i < realDigits.length; i++) {
            realDigits[i] = Math.pow(realDigits[i], 2); // Squares the digit
        }

        n = realDigits.reduce((a, b) => a + b); // n equals sum of digits

        if (n === 1) { // Check if n equals 1
            return true
        } else if (savedNumbers.includes(n)) { // Check if the number is saved
            return false
        }
    }

    return true // If n is already equals 1
};