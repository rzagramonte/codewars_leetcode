/*
Jenny's secret message

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

Will the parameter always be a string?
Will the return always be a string?

console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");
*/

//declare const variable and assign to arrow function
//is name equal in value to "Johnny" ? then return "Hello, my love!" else return "Hello, name!"
const greet = name => name == "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;