/*
Enumerable Magic #25 - Take the First N Elements

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Will the parameters always be an array and a number?
Will the elements in the input array be of any data type?
Will the return always be an array?

console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]);
*/


//declare constant variable which will be assigned to an arrow function
//set parameters arr and n
//slice arr starting from first element inclusive and ending at n exclusive
const take = (arr, n) => arr.slice(0,n);