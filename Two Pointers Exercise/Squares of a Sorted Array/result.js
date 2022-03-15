/**
 * @param {number[]} numbers
 * @return {number[]}
 */
 let sortedSquares = (numbers) => {
    let sortedNumbersSquared = square(numbers).sort(compareFunction);

    return sortedNumbersSquared;
}

const square = (numbers) => {
    return numbers.map(number => number * number);
} 

const compareFunction = (number1, number2) => {
    return number1 - number2;
}