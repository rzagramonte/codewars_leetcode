/*
Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Will the parameter always be an array?
Will the return be a number?

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
*/

//declare variable and assign to arrow function
//set parameter
//reduce array to one value
//multiply all elements
//initial value should be set to 1
const grow = x => x.reduce((acc, c) => acc * c, 1);