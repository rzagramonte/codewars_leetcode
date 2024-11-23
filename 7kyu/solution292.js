/*
Recursion 101

In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
a and b will both be lower than 10E8.

Will the arguments passed into the function always be two numbers?
Will the return always be an array of two numbers?

console.log(solve(6, 19), [6, 7]);
console.log(solve(2, 1), [0, 1]);
console.log(solve(22, 5), [0, 1]);
console.log(solve(2, 10), [2, 2]);

TODO:
i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii)
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii)
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b]
*/

const solve = (a,b) => {
    if(!a || !b) return [a,b];
    if(a >= (2*b)) return solve(a - 2*b, b);
    if(b >= (2*a)) return solve(a, b - 2*a);
    return [a,b];
  };