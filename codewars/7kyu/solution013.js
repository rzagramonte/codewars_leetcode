/*
Band name generator

My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

Will the parameter always be a string?
Will the string always have only one word?
Will the return always be a string?

console.log(bandNameGenerator('knife'), 'The Knife');
console.log(bandNameGenerator('tart'), 'Tartart');
console.log(bandNameGenerator('sandles'), 'Sandlesandles');
console.log(bandNameGenerator('bed'), 'The Bed');
*/

//declare const variable and assign to arrow function
//set parameter
//use ternary operator
//if the first letter equals in value and type to the last letter, then return first word plus first word minus first letter where the first letter of the whole new word is capital
//else return `The word` where word's first letter is capital
const bandNameGenerator = str => str[0] === str[str.length-1] ? `${str[0].toUpperCase()}${str.slice(1)}${str.slice(1)}` : `The ${str[0].toUpperCase()}${str.slice(1)}`;