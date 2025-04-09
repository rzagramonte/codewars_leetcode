/*
Bin to Decimal

Complete the function which converts a binary number (given as a string) to a decimal number.

Will the parameter always be a string?
Will the return always be a number?

console.log(binToDec("1"),1);
console.log(binToDec("0"),0);
console.log(binToDec("1001001"),73);
*/

//declare function and set parameter
function binToDec(bin){
    //return number using parseInt() where bin is passed in and 2 as a radix
    return parseInt(bin,2)
  }