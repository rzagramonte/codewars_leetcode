/*
Minimum to multiple

Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6
Note
0 is always a multiple of x
Constraints
1 <= a <= 106

1 <= x <= 105

Will the parameter always be two numbers?
Will the return always be a number?

console.log(minimum(1, 1), 0);
console.log(minimum(9, 4), 1);
console.log(minimum(10, 6), 2);
console.log(minimum(60, 45), 15);
console.log(minimum(57, 50), 7);
console.log(minimum(28, 16), 4);
console.log(minimum(84, 80), 4);
console.log(minimum(129, 49), 18);
console.log(minimum(150, 67), 16);
console.log(minimum(121, 46), 17);
console.log(minimum(83, 81), 2);
console.log(minimum(89, 74), 15);
*/

//calculate the minimum adjustment need to make 'a' a multiple of 'x'
const minimum = (a, x) => Math.min(x - a % x, a % x);