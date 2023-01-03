/*
Plural

We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

Will the parameter always be positive integers or floats, or zero?
Will the return always be true or false?

console.log(plural(0), true);
console.log(plural(0.5), true);
console.log(plural(1), false);
console.log(plural(100), true);
console.log(plural(Infinity), true);
*/

//declare function and set parameter
function plural(n) {
    // use return keyword
    // n does not equal in value to 1
    return n != 1;
  }