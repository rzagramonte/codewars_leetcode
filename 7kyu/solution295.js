/*
Most digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.


Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);

TODO:
sort the array from largest to smallest length of each number as a string
return first element
*/

const findLongest = array => +array.sort((a,b)=>b.toString().length-a.toString().length)[0];