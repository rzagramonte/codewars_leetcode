/*
Find the index of the second occurrence of a letter in a string

In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.

Examples:

for inputs  "Hello world!!!", 'l'  ->  return 3
for inputs  "Hello world!!!", 'A'  ->  return -1
Good luck ;) And don't forget to rate this kata if you liked it.

Will the arguments passed into the function always be two strings?
Will the return always be a number?

console.log(secondSymbol('Hello world!!!','l'), 3);
console.log(secondSymbol('Hello world!!!', 'o'), 7);
console.log(secondSymbol('Hello world!!!', 'A'), -1);
console.log(secondSymbol('', 'q'), -1);
console.log(secondSymbol('Hello', '!'), -1);

TODO:
return index of l starting from after the index of the first l
*/

const secondSymbol = (str, l) => str.indexOf(l,str.indexOf(l)+1);