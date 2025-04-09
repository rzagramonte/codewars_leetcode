/*
isReallyNaN

I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!

Will the parameter be of any data type?
Will the return always be a boolean of true or false?

console.log(isReallyNaN(37), false);
console.log(isReallyNaN('37'), false);
console.log(isReallyNaN(NaN), true);
console.log(isReallyNaN(undefined), false);
*/

//declare variable and assign to arrow function
//set parameter
//return Number.isNaN() and pass in parameter as an argument
//use Number to avoid any unwanted coercion
const isReallyNaN = val => Number.isNaN(val);