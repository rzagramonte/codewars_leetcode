/*
Grasshopper - Check for factor

This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.

P.R.E.P.
parameters: two numbers
return: boolean of true or false
examples:
input => output
(10,2) => true
(9,2) => false
(63,7) => true
(653,7) => false
pseudocode:
declare function
set parameters
if base % factor === 0
return true
else return false
use ternary operator
*/

function checkForFactor (base, factor) {
    // code here
    return base % factor === 0 ? true : false;
  }


/*
Will the parameters always be two numbers?
Will the return always be a boolean of true or false?

console.log(checkForFactor(10,2),true);
console.log(checkForFactor(9,2),false);
console.log(checkForFactor(63,7),true);
console.log(checkForFactor(653,7),false);
*/

//use negation operator and modulus
const checkForFactor = (base, factor) => !(base % factor);