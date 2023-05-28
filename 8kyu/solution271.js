/*
Parse float

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

Will the parameter always be a value of any data type?
Will the return always be either a number or null?

console.log(parseF("1"), 1.0);
console.log(parseF("a"), null);
*/

//declare a constant variable and assign it to an arrow function
//set parameter
//if s parsed into a floating point number returns false for is it a NaN ? then return null, else return that floating point number
const parseF= s => isNaN(parseFloat(s)) ? null : parseFloat(s);