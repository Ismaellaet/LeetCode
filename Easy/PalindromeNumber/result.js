/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
     let string = String(x);
 
     if(string.split('').reverse().join('') === string) {
         return true;
     }    
 
     return false
};
 
