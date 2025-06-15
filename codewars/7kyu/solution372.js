/*
Adding useful functional functionality to JavaScript arrays

The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum.

Implement a version of range and sum (which you can then copy and use in your future kata to make them smaller).

Array.range(start, count) should return an array containing count numbers from start to start + count ( exclusive )

Example: Array.range(0, 3) returns [0, 1, 2]

array.sum() should return the sum of all numbers in array

Example: [0, 1, 2].sum() returns 3
Example: Array.range(-1,4).sum() should return 2

While not forbidden try to write both function without using a for loop

Will the arguments for the range() method always be two numbers?
Will the this context for the sum() method always be an array of numbers?

console.log(Array.range(1,3), [1,2,3])
console.log(Array.range(-1,1), [-1])
console.log(Array.range(-3,5), [-3,-2,-1,0,1])
console.log(Array.range(0,0), [])
console.log(Array.range(1,0), [])
console.log([].sum(), 0)
console.log([-2,-1,-5].sum(), -8)
console.log([-3,-2,-1,0,1,2,3].sum(), 0)

TODO: range()
create an array the size of the count
iterate over array
add start to index

TODO: sum()
reduce array of nums to sum
*/

Array.range = (start, count) => Array.from({ length: count }, (n, i) => i + start);

Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c, 0);
};
