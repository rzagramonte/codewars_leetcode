/*
Grasshopper - Debug sayHello

Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock

Will the parameter always be a string?
Will the return always be a string that looks like:
"Hello, [name]"

console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock');
console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk');
console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura');
console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
*/

//declare function and set parameter
function sayHello(name) {
    //return string of Hello, [name] using template literal
    return `Hello, ${name}`;
  }