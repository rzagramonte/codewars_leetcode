/*
String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Will the parameter always be a number and a string?
Will the return always be a string?

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
*/

//declare variable and assign to arrow function
//set parameters
// append repeat() method to the string and pass in the number into the method as an argument
const repeatStr = (n, s) => s.repeat(n);