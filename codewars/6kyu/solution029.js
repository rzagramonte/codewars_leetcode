/*
Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log(findOdd([7], 7));
console.log(findOdd([0], 0));
console.log(findOdd([1,1,2], 2));
console.log(findOdd([0,1,0,1,0], 0));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1], 4));
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1], 10));

TODO:
iterate over the array
using a hash map
return number of odd occurrences 


const findOdd = (A) => {
  const occurrences = {};
  A.forEach((e) => (occurrences[e] ? occurrences[e]++ : (occurrences[e] = 1)));
  return +Object.entries(occurrences).find((e) => e[1] % 2)[0];
};
*/
//more efficient:
const findOdd = (A) => A.reduce((a, c) => a ^ c);
