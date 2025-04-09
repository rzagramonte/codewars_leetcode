/*
Regexp Basics - is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

Would the input always be a string?
Will the return always be a boolean of true or false?

console.log(''.digit(), false);
console.log('7'.digit(), true);
console.log(' '.digit(), false);
console.log('a'.digit(), false);
console.log('a5'.digit(), false);
console.log('14'.digit(), false);
*/

//create method for prototype
//test if the string is a digit from 0-9
String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
   };
   
   