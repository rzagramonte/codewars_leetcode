/*
Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

Will the parameter always be an array?
Will the elements in the array always be strings?
Will the return always be an array?
Will the array be sorted from shortest string to longest string?

console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
*/

//declare const variable and assign to arrow function
//set parameter
//sort array from shortest string to longest string
//use sort() method
//use .length property
const sortByLength = array => array.sort((a,b) => a.length - b.length);