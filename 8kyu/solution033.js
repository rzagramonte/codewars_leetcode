/*
Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

Will the parameter always be a string?
Will the return always be a string?

console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");
*/

//declare const variable and assign to arrow function
//if first letter of name is "r" or "R" return "name plays banjo", else return "name does not play banjo"
const areYouPlayingBanjo = name => name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;