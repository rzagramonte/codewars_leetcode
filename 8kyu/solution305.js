/*
Merging sorted integer arrays (without duplicates)

Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

Will the parameter always be two arrays?
Will the elements of the input arrays always be numbers?
Will the return always be one array?
Will the elements of the output array be numbers?

console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);
*/

//declare constant variable mergeArrays which will be assigned to an arrow function
//set parameters a and b
//create new array using square bracket notation
//concatenate array a and array b
//sort the new concatenated array in ascending order
//create new Set object with new array in it to eliminate duplicates
//spread elements into new array using spread syntax
const mergeArrays = (a, b) => [...new Set(a.concat(b).sort((a,b)=>a-b))];
