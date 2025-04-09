/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

Will the parameter always be a number?
Can the number be positive or negative?
Will the return always be a number?
Will the number always be negative?

console.log(makeNegative(42), -42);
console.log(makeNegative(-42), -42);
*/

//declare variable and assign to arrow function
//set parameter
//if num is negative, return num else return -num
const makeNegative = num => num < 0 ? num : -num;