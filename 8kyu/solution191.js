/*
Is it a number?

DESCRIPTION:
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")

Will the parameter always be a string?
Will the return always be a boolean of true or false?

console.log(isDigit(input), false);
console.log(isDigit(input), true);
*/

//declare function and set parameter
function isDigit(s) {
    //your code
    //return s is equal in value to parseFloat(s)
    return s == parseFloat(s);
  }