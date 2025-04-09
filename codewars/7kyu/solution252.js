/*
Substring fun

Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.


Will the argument passed into the function always be an array of strings?
Will the return always be a string?

const { assert } = require("chai")

console.log(nthChar([]),'');
console.log(nthChar(['yoda', 'best', 'has']), 'yes');

TODO:
iterate over elements
return character of element at current index
join the array into a string
*/

const nthChar = words => words.map((e,i)=>e[i]).join("");