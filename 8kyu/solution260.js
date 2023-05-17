/*
Return Two Highest Values in List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

Will the parameter always be an array?
Can the array be empty?
If the input array has elements, will the elements always be numbers?
Will the return always be an array?
Will the array either have 0, 1, or 2 elements?
If the returned array has elements, will they always be numbers?

console.log(twoHighest([]), []);
console.log(twoHighest([15]), [15]);
console.log(twoHighest([15, 20, 20, 17]), [20, 17]);
*/

//declare const variable, assign to arrow function, and set parameter
//create new Set object and pass in arr into the constructo while also spreading the values into an array using the spread syntax
//sort the array in descending order
//slice the array to include the first two elements
const twoHighest = arr => [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);