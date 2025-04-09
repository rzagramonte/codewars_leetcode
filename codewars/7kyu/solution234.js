/*
The Office III - Broken Photocopier

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(broken("1"), "0");
console.log(broken("10000000101101111110011001000"), "01111111010010000001100110111");
console.log(broken("100010"), "011101");

TODO:
replace 0s with 1s and 1s with 0s
*/

const broken = x => x.replace(/[01]/g,e=>!+e?"1":"0");