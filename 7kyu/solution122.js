/*
Simple Fun #176: Reverse Letter

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

Will the parameter always be a string?
Will the return always be a string?

console.log(reverseLetter("krishan"),"nahsirk");
console.log(reverseLetter("ultr53o?n"),"nortlu");
console.log(reverseLetter("ab23c"),"cba");
console.log(reverseLetter("krish21an"),"nahsirk");
*/

//declare constant variable reverseLetter which will be assigned to an arrow function
//set parameter str
//knock out everything of the string that isn't the abc's
//spread the characters into an array
//reverse array
//join array to a string - yey!
const reverseLetter = str => Array.from(str.replace(/[^a-z]/gi,'')).reverse().join('');