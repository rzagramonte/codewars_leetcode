/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

Will the parameter always be a number?
Will the return always be an array?
Will the elements in the array always be numbers?

console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);
*/

//declare variable and assign to arrow function
//convert n to string
//split the string into an array of sub-strings
//reverse the string in place
//map over the array and convert each element to a number
const digitize = n => n.toString().split('').reverse().map(Number);