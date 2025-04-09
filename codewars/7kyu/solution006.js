/*
Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Will the parameter always be a number?
Will the return always be a number in descending order?

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);
*/

//declare function and set parameter
function descendingOrder(n){
    //...
    //use return keyword, number command, toString, split, sort, and join method to return number in descending order
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''));
  }

//refactored code:
//spread the number converted to a string into an array
//sort in descending order and change back to number
const descendingOrder = n => +[...n.toString()].sort((a,b)=>b-a).join('');