/*
Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Will the parameter always be a string?
Will the string contain at least one '!'?
Will the return always be a string?
Will there be no '!' in the returned string?

console.log(removeExclamationMarks("Hello World!"), "Hello World");
*/
const removeExclamationMarks = s => s.replaceAll('!', '');