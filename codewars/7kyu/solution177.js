/*

Is it a letter?

Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

Will the input always be a string?
Will the string always have a length of 1?

console.log(isItLetter('a'), true, `'a' is a letter`);
console.log(isItLetter('1'), false, `'1' is not a letter`);
*/

//matching only letters, is the return value an array?
const isItLetter = character => Array.isArray(character.match(/[a-z]/gi));