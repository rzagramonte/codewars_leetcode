/*
The 'if' function
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

a boolean of true or false, bool
2 functions which do not take in any parameters, func1 and func2
whatever function 1 or 2 return when called
example would be =>
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/

function _if(bool, func1, func2) {
    // ...
    //use return keyword
    //use ternary operator or conditional operator
    //if bool is truthy return func1() else return func2()
    return bool ? func1() : func2();
  }
