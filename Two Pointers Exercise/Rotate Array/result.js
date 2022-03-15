/**
 * @param {number[]} numbers
 * @param {number} step
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
let rotate = (numbers, step) => {
    for(i = 0; i < step; i++) {
        numbers.unshift(numbers.pop());
    }
}