/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    const number = (BigInt(digits.join('')) + BigInt(1)).toString();
    let newDigits = [];

    for (i = 0; i < number.length; i++) {
      newDigits.push(+number[i])  
    }

    return newDigits
};