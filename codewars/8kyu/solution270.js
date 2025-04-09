/*
Enumerable Magic #2 - True for Any?

Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

Will the parameters always be an array and a function?
Will the elements of the input array always be numbers?
Will the return always be a boolean of true or false?

console.log(any([1,2,3,4], function(v,i){return v>3}), true);
console.log(any([1,2,3,4], function(v,i){return v>4}), false);
*/

//declare a constant variable and assign it to an arrow function
//set the parameters
//implicit return of true or false of at least one element satisfying the callback function
const any = (arr, fun) => arr.some(fun);