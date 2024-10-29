/*
Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log([10,14,2,23,19], 42);
console.log([-100,-29,-24,-19,19], 0);
console.log([1,2,3,4,6,-1,2], 10);
console.log([-10, -8, -16, -18, -19], -18);

TODO:
sort the array from greatest to least
add first two elements and return sum
*/

const largestPairSum = nums => {
    nums = nums.sort((a,b)=>b-a);
    return nums[0] + nums[1];
  };