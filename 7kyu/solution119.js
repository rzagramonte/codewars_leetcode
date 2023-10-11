/*
Number Pairs

In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

Will the parameters always be two arrays?
Will the elements of the input arrays always be numbers?
Will the return always be a new array?
Will the elements of the returned array always be numbers?

let a = [13, 64, 15, 17, 88];
let b = [23, 14, 53, 17, 80];
console.log(getLargerNumbers(a, b), [23, 64, 53, 17, 88]);

a = [34, -64, 15, 17, 88]
b = [23, 14, 53, 17, 80]
console.log(getLargerNumbers(a, b), [34, 14, 53, 17, 88]);
*/

//declare constant variable getLargerNumbers which will be assigned to an arrow function
//set parameters a and b
//map over array a
//for each element return the max between the element in a vs the element in b at the same index
const getLargerNumbers = (a, b) => a.map((e,i)=>Math.max(e,b[i]));