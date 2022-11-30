/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

Will the parameter always be an array?
Will the elements in the array all be numbers?
Will the return always be a number?

console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
*/

//declare variable and assign to arrow function
//set parameter
//map over array to square each number
//reduce the array to one number by adding all the elements together
const squareSum = numbers => numbers.map(num => num ** 2).reduce((acc, c)=>acc + c, 0);