/*
Alternate case

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

Will the parameter always be a string?
Will the return always be a string?

console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD");
*/

//declare constant variable to assign to an arrow function
//set parameter
//split string by character and shuffle the characters into an array
//map over the elements in the array
//is letter equal in value to the letter as uppercase? then return it as a lowercase
//else return it as an uppercase
//join the elements in the array by character
const alternateCase = s => s.split('').map(letter=>letter == letter.toUpperCase() ? letter.toLowerCase():letter.toUpperCase()).join('');