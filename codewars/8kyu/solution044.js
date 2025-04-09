/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

Will the parameter always be a string?
Will the string consist of two names with a space between them?
Will the return always be a string?
Will the first character of the returned string be a capital letter?
Will the second character of the returned string be a period?
Will the third and last character of the returned string be a capital letter?

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
*/

//declare variable and assign to arrow function
//set parameter
//return string using template literal
//interpolate the first character of the input name coerced to uppercase
//proceed with period
//interpolate the character after ' ' and coerced to uppercase
const abbrevName = name => `${name[0].toUpperCase()}.${name[name.indexOf(' ')+1].toUpperCase()}`;