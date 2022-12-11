/*
Ensure question

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

Will the parameter always be a string?
Will the return always be a string with its last character as a "?"?

console.log(ensureQuestion(""),"?","Expected: '?'");
console.log(ensureQuestion("Yes"),"Yes?","Expected: '?'");
console.log(ensureQuestion("No?"),"No?","Expected: '?'");
*/

//declare a variable ensureQuestion and assign it to an arrow function
//use ternary/conditional operator to create if else statement
//if the last character of s is "?" then return s
//else return "s?" using a template literal
let ensureQuestion = s => s[s.length -1] === "?" ? s : `${s}?`;