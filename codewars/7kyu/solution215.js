/*
Calculate Parity bit!

A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

Example:

  Parity: 'even'
  Bin: '0101010'
  Result: 1
Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

Will the arguments passed into the function's parameters always be two strings?
Will the return always be a number of 0 or 1?

console.log(checkParity('even','101010'), 1);
console.log(checkParity('odd','101010'), 0);
console.log(checkParity('even','101011'), 0);
console.log(checkParity('odd','101011'), 1);
*/

//capture length of string minus 0's
//if parity is even and b1 is odd, return 1
//if parity is even and b1 is even, return 0
//if parity is odd and b1 is even, return 1
//if parity is odd and b1 is odd, return 0
const checkParity = (parity, bin) => {
    let b1 = bin.replace(/0/g,'').length;
    if(parity == 'even' && b1%2) return 1;
    if(parity == 'even' && !(b1%2)) return 0;
    if(parity == 'odd' && !(b1%2)) return 1;
    if(parity == 'odd' && b1%2) return 0;
  };