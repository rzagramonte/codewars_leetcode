/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

Will the parameter always be a number?
Will the return always be a number?

console.log(getSumOfDigits(123), 6);
console.log(getSumOfDigits(223), 7);
console.log(getSumOfDigits(0), 0);

initial code:
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
*/

const getSumOfDigits = integer => {
    let sum = 0;
    let digits =  Math.floor(integer).toString();
    for(let i = 0; i < digits.length; i++) {
      sum += +digits[i];
    }
    return sum;
  };