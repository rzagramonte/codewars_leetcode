/*
Between Extremes

Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

Will the parameter always an array?
Will the elements in the array always be numbers?
Can the numbers be positive or negative?
Can the numbers be whole or floating point numbers?
Will the return always be a number?

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes([-1, -41, -77, -100]), 99);
*/

//declare const variable and assign to arrow function
//set parameter
//subtract the min number in the array from the max number in the array
const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);
