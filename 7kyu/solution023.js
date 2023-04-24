/*
Hello World - Without Strings

Task
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!

Will the input allow anything but strings made from double or single quotes or back ticks?
Will the returned value be a string?
Will the string read Hello, World!'?

console.log(helloWorld(), "Hello, World!");
*/

//declare a const variable and assign it to an arrow function
//no parameters
//return requested string
//use String.fromCharCode()
//input character codes for each character in the desired string
const helloWorld = () => String.fromCharCode(72,101,108,108,111,44,32,87,111,114,108,100,33);