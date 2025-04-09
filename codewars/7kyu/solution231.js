/*
Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

Will the argument passed into the function's parameter always be an array?
Will the return always be a number?

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);

TODO:
sort array in ascending order
if the first and second element are the same, return the last element, else return the first element
*/

const stray = n => {
    n = n.sort((a,b)=>a-b);
    return n[0] == n[1] ? n[n.length-1] : n[0]
  };