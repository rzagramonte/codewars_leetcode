/*
Evens times last

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

Will the argument passed into the function's parameter always be an array?
Will the return always be a number?

console.log([2, 3, 4, 5]), 30);
console.log([2, 3, 4, 5]), 30);
console.log([2, 3, 4, 5]), 30);

TODO:
add even indexed numbers and multiply by last number
*/

const evenLast = n => n.reduce((a,c,i)=>a+(i%2?0:c),0)*n.slice(-1);