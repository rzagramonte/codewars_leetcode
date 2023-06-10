/*
Simple validation of a username with regex

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

Will the parameter always be a string?
Will the return always be a boolean of true or false?

console.log(validateUsr('asddsa'), true);
console.log(validateUsr('a'), false);
console.log(validateUsr('Hass'), false);
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
console.log(validateUsr(''), false);
console.log(validateUsr('____'), true);
console.log(validateUsr('012'), false);
console.log(validateUsr('p1pp1'), true);
console.log(validateUsr('asd43 34'), false);
console.log(validateUsr('asd43_34'), true);
*/

//declare constant variable that will be assigned to arrow function
//set parameter
//test whether the following is true/false for the username
// ^ asserts the start of the string
// [a-z0-9_] matches any lowercase letter, number, or underscore character
// {4,16} specifies the length range of the username, allowing a minimum of 4 characters and a maximum of 16 characters.
// $ asserts the end of the string
const validateUsr = username => /^[a-z0-9_]{4,16}$/.test(username);