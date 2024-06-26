/*
get character from ASCII Value

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/

Will the parameter always be a number?
Will the return always be a string?

console.log(getChar(55),'7');
console.log(getChar(56),'8');
console.log(getChar(57),'9');
console.log(getChar(58),':');
console.log(getChar(59),';');
console.log(getChar(60),'<');
console.log(getChar(61),'=');
console.log(getChar(62),'>');
console.log(getChar(63),'?');
console.log(getChar(64),'@');
console.log(getChar(65),'A');
*/

//declare constant variable and assign it to arrow function
//use string object and append it to fromCharCode() using dot notation
//pass in c as argument into method
const getChar = c => String.fromCharCode(c);