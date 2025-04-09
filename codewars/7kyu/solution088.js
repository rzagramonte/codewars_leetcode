/*
99 Problems, #1: last in list

Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null

Will the parameter always be an array?
Will the return always be one value of either null or any other data type?

console.log(last([1,2,3]), 3);
console.log(last([]), null);
*/


//declare constant variable last which will be assigned to an arrow function
//set parameter xs
//is the length of xs truth? then return the last element, else return null
const last = xs => xs.length ? xs[xs.length-1] : null;