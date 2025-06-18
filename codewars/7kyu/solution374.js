/*
Pairs of integers from 0 to n

Write a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition

0 <= a <= b <= n
The pairs should be sorted by increasing values of a, then by increasing values of b.

For example,

for input: 2
it should return: [  [0, 0], [0, 1], [0, 2],  [1, 1], [1, 2],  [2, 2]  ]

Will the argument passed into the function always be an integer?
Will the return always be an array of arrays of two integers?

console.log(generatePairs(2), [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]));

TODO:
create array in the length of number of pairs
reduce the accumalator
get the last added pair
increment b (same a)
increment a, reset b to a
*/

const generatePairs = n =>
  [...Array(n * (n + 3) / 2)].reduce(acc => {
    const [n1, n2] = acc.at(-1);
    return [...acc, n2 < n ? [n1, n2 + 1] : [n1 + 1, n1 + 1]];
  }, [[0, 0]]);