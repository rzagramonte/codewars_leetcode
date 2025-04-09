/*
Array element parity

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance
[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance
[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)

Good luck!

Will the argument passed into the function always be an array of integers?
Will the return always be an integer?

console.log(solve([1,-1,2,-2,3]), 3);
console.log(solve([-3,1,2,3,-1,-4,-2]), -4);
console.log(solve([1,-1,2,-2,3,3]), 3);
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]), -38);
console.log(solve([-9,-105,-9,-9,-9,-9,105]), -9);

TODO:
find the element that does not have another positive or negative integer in the array
*/

const solve = arr => arr.find(e=>!(arr.includes(-e)));