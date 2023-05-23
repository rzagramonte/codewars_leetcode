/*
get ascii value of character

Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/

Will the parameter always be a string?
Will the string always have one character?
Will the return always be a number?

console.log(getASCII('A'),65);
console.log(getASCII(' '),32);
console.log(getASCII('!'),33);
*/

//declare constant variable
//assign to arrow function
//set parameter
//return character code at index 0 of c
const getASCII = c => c.charCodeAt(0);