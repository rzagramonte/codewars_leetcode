/*
Enumerable Magic #4 - True for None?
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

Will the parameters always be an array and a function?
Will the return always be a boolean of true or false?

console.log(none([1,2,3,4,5],function(item){ return item > 5 }), true):
console.log(none([1,2,3,4,5],function(item){ return item > 4 }), false):
*/

//declare const variable none and assign it to an arrow function
//set parameters arr and fun, arr being an array and fun being a function

//use some() method
//use dot notation
//append arr to the some() function using dot notation and pass in fun into the some() method as an argument
//use logical not operator in front of arr to return the negated boolean
const none = (arr, fun) => !arr.some(fun);