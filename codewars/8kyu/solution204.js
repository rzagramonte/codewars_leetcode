/*
Hex to Decimal

Complete the function which converts hex number (given as a string) to a decimal number.

Will the parameter always be a string?
Will the return always be a number?

console.log(hexToDec("1"), 1);
console.log(hexToDec("a"), 10);
console.log(hexToDec("10"), 16);
console.log(hexToDec("FF"), 255);
console.log(hexToDec("-C"), -12);
*/

//declare variable and assign it to arrow function
//use parseInt() and pass in parameter with base of 16
const hexToDec =  hexString => parseInt(hexString,16);