/*
Enumerable Magic #20 - Cascading Subsets

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.

Will the arguments passed into the function always be an array and a number?
Will the return always be an array of arrays of numbers?

const lst = [3, 5, 8, 13];
console.log(eachCons(lst, 1), [[3], [5], [8], [13]]);
console.log(eachCons(lst, 2), [[3,5], [5,8], [8,13]]);
console.log(eachCons(lst, 3), [[3,5,8], [5,8,13]]);
console.log(eachCons([], 3), []);

TODO:
map over array
for each element, return a sub-array starting from its index (inclusive) to its index + n (exclusive)
filter elements that are the length of n
*/

const eachCons = (a, n) => a.map((e,i) => a.slice(i, i + n)).filter(e => e.length == n);