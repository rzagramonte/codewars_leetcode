/*
Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the return always be an array?
Will the elements in the output array always be numbers?

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
*/

const maps = x => x.map(element=>element * 2);