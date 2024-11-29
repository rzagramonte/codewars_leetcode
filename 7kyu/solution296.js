/*
Currying functions: multiply all elements in an array


To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

Will the arguments always be an array of numbers and a number?
Will the return always be a new array of numbers?

console.log( multiplyAll ([1,2,3]) (2) , [2,4,6]);
console.log( multiplyAll ([1,2,3]) (1) , [1,2,3]);
console.log( multiplyAll ([1,2,3]) (0) , [0,0,0]);
console.log( multiplyAll ([]) (10) , []);

TODO:
first argument will be array
second argument will be a number
map over the array
multiply each element in the array by the input number
*/

const multiplyAll = arr => num => arr.map(e=>e*num);