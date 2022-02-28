function sortNumbers(number){ // Function to sorted numbers in ascending order
    const compareFunction = (number1, number2) => { // Function to compare number1 with number2
        return number1 - number2
    };
    const newNumbers = number.sort(compareFunction);
    return newNumbers;
}

function error(target){ // Function to throw error when target is different from a number
    if(typeof target != "number"){
        throw new Error('Invalid target! Please type a Number')
    };
}

function searchTarget(numbers, target){ // Main function, where you will search for the target
error(target)
sortNumbers(numbers)
let right = numbers.length - 1;
let left = 0;

    while(left <= right) {
        let mid = left + Math.floor((right - left + 1) / 2); // Right/upper mid to avoid infinite loop

        if(numbers[mid] === target) {
            console.log(`${target} exists and its index is ${mid}`);
            return;
        } else if(numbers[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    console.log(`${target} does not exists`);
}
