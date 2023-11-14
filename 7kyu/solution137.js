/*
isEven? - Bitwise Series

Is the number even?
If the numbers is even return true. If it's odd, return false.





Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python

Will the parameter always be an integer?
Will the return always be a boolean of true or false?

console.log(isEven(2),true);
console.log(isEven(3),false);
console.log(isEven(14),true);
console.log(isEven(15),false);
console.log(isEven(26),true);
console.log(isEven(27),false);
*/


//declare constant variable isEven which will be assigned to an arrow function
//set parameter n
//return true or false if n divided by 2 is an integer
const isEven = n => Number.isInteger(n/2);