/*
Largest Elements

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

Will the parameter always be a number and an array?
Will the elements in the input array always be numbers?
Will the return always be an array?
Will the elements of the output array always be numbers?

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),[9, 10);
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),[]);
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]),[-1, 0]);
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]),[5, 5, 5]);
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63),[3, 5, 9, 13, 22, 50, 63]);
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]),[]);
*/

//declare constant variable largest which will be assigned to an arrow function
//set parameters n and array
//sort the array in ascending order
//slice the array starting from the length of the array minus n
const largest = (n, array) => array.sort((a,b)=>a-b).slice(array.length-n);