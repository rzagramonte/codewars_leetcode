/*
Swap two numbers

Write a swap function to swap 2 integers in place

NOTES

The input parameter is an integer array with 2 elements. ary.length == 2
You are not allowed to rename the input parameter
You are not allowed to use any other variables
You are not allowed to use any other functions
You are not allowed to use any other keywords
In other words, I want you to write the equivalent of

swap = ary => {
  tmp = ary[0]
  ary[0] = ary[1]
  ary[1] = tmp
}
But without the tmp !

Will the argument passed into the function always be an array of integers?
Will the return always be an array w its integers in reverse?

console.log(swap([123, 456]), [456, 123]);
console.log(swap([5, 10]), [10, 5]);
console.log(swap([554, 610]), [554, 610]);

TODO:
put first element and second into new array in that order
set it equal to the reverse
*/

swap = (ary) => ([ary[0], ary[1]] = [ary[1], ary[0]]);
