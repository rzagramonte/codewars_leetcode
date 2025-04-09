/*
Returning Strings
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

Will the parameter always be a string?
Will the return always be a string?
Will the return interpolate the parameter into the string?

console.log(greet("Ryan"), "Hello, Ryan how are you doing today?");
console.log(greet("Shingles"), "Hello, Shingles how are you doing today?");
*/

//declare variable and assign to arrow function
//set parameter
//return template literal interpolating parameter into string
const greet = name => `Hello, ${name} how are you doing today?`;