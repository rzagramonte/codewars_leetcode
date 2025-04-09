/*
Even numbers in an array

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

Will the parameters always be an array and a number?
Will the elements of the input array always be numbers?
Will the return always be an array?
Will the elements of the output array always be even numbers?

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
*/

//declare constant variable evenNumbers
//set parameters array and number
//filter even numbers
//slice array to only include last number of elements
const evenNumbers = (array, number) => array.filter(n=>!(n%2)).slice(-number);