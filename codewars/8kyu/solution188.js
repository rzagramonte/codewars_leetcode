/*
Exclusive "or" (xor) Logical Operator

Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

Will the parameters always be two booleans of either true or false?
Will the return always be one boolean of true or false?

console.log(xor(false, false), false, "false xor false === false");
console.log(xor(true, false), true, "true xor false === true");
console.log(xor(false, true), true, "false xor true === true");
console.log(xor(true, true), false, "true xor true === false");
console.log(xor(true, true), true, "'xor' is NOT identical to 'or'");
*/

//declare function and set parameters
function xor(a, b) {
    // TODO: Program Me
    //use return keyword and ternary/conditional operator
    //if a and be are both truthy, return false
    //if a and be are both falsy, return false
    //if a is truthy and b is falsy, return true
    //if a is falsy and b is truthy, return true
    //else return false
     return a && b ? false :
           !a && !b ? false :
           a && !b ? true :
           !a && b ? true : false;
  }