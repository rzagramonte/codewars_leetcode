/*
Return the first M multiples of N

Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

(3, 5.0) --> [5.0, 10.0, 15.0]

numbers -> two whole numbers
array of numbers

create array w length m
iterate through array
add 1 to index then multiply by n
*/

const multiples = (m, n) => Array.from({ length: m }, (e, i) => (i + 1) * n);

console.log(multiples(3, 5), [5, 10, 15]);