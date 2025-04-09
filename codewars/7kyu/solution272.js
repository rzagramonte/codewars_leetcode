/*
Extra Perfect Numbers (Special Numbers Series #7)

Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N, Return the extra perfect numbers in range from 1 to N. Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Will the argument passed into function always be a number?
Will the return always be an array of numbers?

console.log(3), [1,3]);
console.log(5), [1,3,5]);
console.log(7), [1,3,5,7]);
console.log(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
console.log(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]);

TODO:
create an array in the length of half of the input number rounded up
iterate through the array
at each iteration multiply i by 2 then 1 to produce an odd number
*/

const extraPerfect = n => Array.from({length:Math.ceil(n/2)}, (_,i)=>i*2+1);