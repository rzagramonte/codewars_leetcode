/*
Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Will the parameter always be a number?
Will the return always be a number?
Will the return's number be a  product of the given number?

console.log(simpleMultiplication(2),16);
console.log(simpleMultiplication(1),9);
console.log(simpleMultiplication(8),64);
console.log(simpleMultiplication(4),32);
console.log(simpleMultiplication(5),45);
*/

// declare const variable and assign to arrow functin
// set parameter
// if number isn't even return number times 9 else return number times 8
const simpleMultiplication = number => number % 2 ? number * 9 : number * 8;