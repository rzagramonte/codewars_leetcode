/*
For Twins: 1. Types

Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false

Will the parameter be of any data type?
Will the return be a only boolean of true or false?

console.log(typeValidation(42, "number"), true);
console.log(typeValidation("42", "number"), false);
*/

//declare function and set parameters
function typeValidation(variable, type) {
    // Your code should be here ;)
    // return true or false in typeof variable equal in value to type
    return typeof variable == type;
  }