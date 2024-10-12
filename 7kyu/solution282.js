/*
Operations with sequence

Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.

Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log(calc([ 0, 2, 1, -6, -3, 3 ]), 31);
console.log(calc([ 0 ]), 0);
console.log(calc([ 1, 1, 1, 1, 1 ]), 5);

TODO:
perform each operation in separate map methods
reduce the results into a number
*/

const calc = a=>a.map(e=>e>0 ? e**2 : e).map((e,i)=>!((i+1)%3) ? e*3 : e).map((e,i)=>!((i+1)%5) ? e*-1 : e).reduce((a,c)=>a+c);