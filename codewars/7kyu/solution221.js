/*
Double Every Other

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]

Will the argument passed into the function's parameter always be an array?
Will the return always be an array?

console.log(doubleEveryOther([1,2,3,4]), [1,4,3,8]);
console.log(doubleEveryOther([2,5,1,3]), [1,10,3,6]);
console.log(doubleEveryOther([11,32,13,41]), [1,64,3,82]);

TODO:
return array w every other element doubled
*/

const doubleEveryOther = a => a.map((e,i)=>i%2?e*2:e);