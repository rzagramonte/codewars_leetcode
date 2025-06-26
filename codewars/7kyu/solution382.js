/*
Digits explosion

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(explode("312"), "333122");
console.log(explode("102269"), "12222666666999999999");
console.log(explode("0"), "");
console.log(explode("000"), "");
console.log(explode("123"), "122333");

TODO:
spread s to an array
iterate
repeat the string n amount of times
join it back to string
*/

const explode = s => [...s].map(n => n.repeat(+n)).join('');