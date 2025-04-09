/*
Multiply the strings in the array

You received an array with two strings.
Create a function that will return their product as a string.
E.g.

input: ['3', '5'] => output: '15'
input: ['2', '-3'] => output: '-6'
input: ['9', '0'] => output: '0'

Will the argument passed into the function always be an array of strings?
Will the return always be a string?

console.log(arrMultiply(['3', '5']), "15");
console.log(arrMultiply(['2', '-3']), "-6");
console.log(arrMultiply(['9', '0']), "0");

TODO:
reduce array to a product
return as a string
*/

const arrMultiply = arr => arr.reduce((a, c) => a * +c, 1).toString();
