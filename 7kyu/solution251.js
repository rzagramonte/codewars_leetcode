/*
Spacify

Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"

Will the input always be a string?
Will the return always be a string?

console.log(spacify('hello world'),'h e l l o   w o r l d');
console.log(spacify('12345'),'1 2 3 4 5');


TODO:
spread the string into an array
join the array of substrings by a space back into a string
*/

const spacify = str => [...str].join(' ');