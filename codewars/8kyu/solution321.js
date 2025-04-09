/*
Get number from string

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)


Will the parameter always be a string?
Will the return always be a number?

console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
*/

//declare constant variable getNumberFromString which will be assigned to an arrow function
//set parameter s
//replace all non-digits with ''
const getNumberFromString = s => +(s.replace(/\D/g,''));