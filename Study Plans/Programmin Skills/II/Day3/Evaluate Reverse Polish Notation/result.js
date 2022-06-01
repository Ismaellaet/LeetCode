/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operators = {
    "+" : (num1, num2) => {
      stack.push(num1 + num2);
    },
    "-" : (num1, num2) => {
      stack.push(num2 - num1);
    },
    "*" : (num1, num2) => {
      stack.push(num1 * num2);
    },
    "/" : (num1, num2) => {
      stack.push(Math.trunc(num2 / num1));
    },
  }
 
  let stack = [];

  for (i = 0; i < tokens.length; i++) {
    if (operators[tokens[i]]) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      
      operators[tokens[i]](num1, num2)
    } 

    if (!operators[tokens[i]]) {
      stack.push(+tokens[i])
    }
  }

  return stack
};

console.log(evalRPN(["4","13","5","/","+"]))