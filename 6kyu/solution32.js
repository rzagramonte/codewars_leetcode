/*
Sentence Calculator

Sentence Calculator
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string

Will the argument passed into the function always be 

console.log(lettersToNumbers("I Love You"), 170);
console.log(lettersToNumbers("ILoveYou"), 170);
console.log(lettersToNumbers("ARE YOU HUNGRY?"), 356);
console.log(lettersToNumbers("oops, i did it again!"), 152);
console.log(lettersToNumbers("Give me 5!"), 73);
console.log(lettersToNumbers("Give me five!"), 110);

TODO:
reduce string to number
test for caps and lowercase to convert to charcode
else return number if its a digit
else 0
*/

const lettersToNumbers = s => [...s].reduce((a, c) => a + (/[a-z]/.test(c) ? c.charCodeAt(0) - 96 : /[A-Z]/.test(c) ? (c.charCodeAt(0) - 64) * 2 : /\d/.test(c) ? +c : 0), 0);
