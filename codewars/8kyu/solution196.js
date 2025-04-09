/*
Wilson primes

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

Will the parameter always be a number?
Will the return always be a boolean of either true or false?

console.log(amIWilson(5), true);
console.log(amIWilson(9), false);
console.log(amIWilson(6), false);
*/

//declare function and set parameter
function amIWilson(p) {
    // check if prime is Wilson
    //return true if p is equal in value to 5, 13, or 563, else return false
    return p == 5 || p == 13 || p == 563;
     }