/*
Odd or Even?

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the return always be a string?
Will the string always be either "odd" or "even"?

console.log(oddOrEven([0, 1, 2]), 'odd');
console.log(oddOrEven([0, 1, 4]), 'odd');
console.log(oddOrEven([0, 1, 5]), 'even');
console.log(oddOrEven([0, 1, 3]), 'even');
console.log(oddOrEven([]), 'even');
console.log(oddOrEven([1]), 'odd');
*/

//declare constant variable which will be assigned to arrow function
//set parameter
//is the remainder value of the reduced array when divided by 2 truthy? then return "odd" else return "even"
const oddOrEven = array => array.reduce((a,c)=>a+c,0) % 2 ? "odd" : "even";