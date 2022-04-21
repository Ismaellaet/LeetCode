/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

/* Arithmetic Progression => an = a1 + (n - 1) * d 
        Where:  a1 = low
                an = high
                n = number of terms
                d = common difference
        
        n = (an - a1) / d + 1
    */
var countOdds = function (low, high) {
    let commonDifference = 2; // d

    // Check if low is even
    if (low % 2 == 0) {
        low += 1 // Next odd number
    }

    // Check if high is even
    if (high % 2 == 0) {
        high -= 1 // Previous odd number
    }


    let quantityOfOddNumbers = (high - low) / commonDifference + 1; // n

    return quantityOfOddNumbers
};

