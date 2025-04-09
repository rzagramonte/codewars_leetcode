/*
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"

Will the parameter always be a string?
Will the string always be a non-empty string?
Will the return always be a string?
Will the returned string always have an exclamation mark as its last character?

console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!");
console.log(remove("!Hi"), "Hi!");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
console.log(remove("Hi"), "Hi!");
*/

//declare const variable and assign to arrow function
//set parameter
//replace all exclamation marks with ''
//add exclamation mark at the end of the string
const remove = string => string.replaceAll('!', '') + '!';