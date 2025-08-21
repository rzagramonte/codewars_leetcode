/*
Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the sumPairs.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined/Nothing (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

Will the argument passed into the function always be an array of numbers and a number?
Will the return always be either an array of two numbers or undefined?

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
console.log(sumPairs([20, -13, 40], -7), undefined);
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4]);
console.log(sumPairs([0, 2, 0], 0), [0, 0]);
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3]);

const l9 = Array(5000000).fill(1);
l9[0] = 13;
l9[1] = 3;
l9[2499999] = 6;
l9[2500000] = 7;
l9[4999998] = 8;
l9[4999999] = -3;
console.log(sumPairs(l9, 13), [6, 7]);
console.log(sumPairs(l9, 5), [8, -3]);
console.log(sumPairs(l9, 16), [13, 3]);
console.log(sumPairs(l9, 31), undefined);

TODO:
create variable to hold seen numbers
iterate over ints
create variable to hold difference of s - n
if difference is found in the seen obj, return [diff, n]
set seen[n] to 1
*/

const sumPairs = (ints, s) => {
  const seen = {};

  for (const n of ints) {
    const diff = s - n;

    if (seen[diff]) return [diff, n];
    seen[n] = 1;
  }
};
