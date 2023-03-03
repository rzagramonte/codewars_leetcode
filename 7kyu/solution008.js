/*
Greet Me

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

Will the parameter always be a string?
Will the return always be a string?

console.log(greet('riley'), 'Hello Riley!');
console.log(greet('JACK'), 'Hello Jack!');
*/

//declare variable and assign to arrow function
//use template literal
//using dot notation, append first character in string to toUpperCase() method
//using dot notation append name to slice() method and pass in 1 as an argument
const greet = name =>`Hello ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`;