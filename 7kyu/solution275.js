/*
Find the sum of the roots of a quadratic equation

Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

Will the arguments passed into the function always be three numbers?
Will the return always be either a number or null?

console.log(roots(1,-35,-23),35);
console.log(roots(6,0,-24),0);
console.log(roots(-5,21,0),4.2);
console.log(roots(6,4,8),null);

TODO:
if the discriminant is greater than or equal to 0, return the sum of the roots rounded to the nearest 2 decimals else return null
*/

const roots = (a, b, c) => b ** 2 - 4 * a * c >= 0 ? Math.round(-b / a * 100) / 100 : null;