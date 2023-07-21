/*
Unpacking Arguments

You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")

Will the parameter always be a function and an array?
Will the return always be a calling function with argument(s)?

console.log(spread(function(x,y){return x+y}, [1,2]), 3)
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//return function call with arguments spread into it using spread syntax
const spread = (func, args) => func(...args);