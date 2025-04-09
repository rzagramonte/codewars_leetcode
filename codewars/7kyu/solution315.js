/*
Temperature analysis I

You were given a string of integer temperature values, each separated by a space character.

Create a function that return its lowest value, or None/null/Nothing if the string is empty.

Will the argument passed into the function always be a string?
Will the return always be a number or null?

console.log(lowestTemp(''), null);
console.log('-1 50 -4 20 22 -7 0 10 -8'), -8);
console.log('18 27 -42 16 17 -43 36 45 -25 -24 19 -14'), -43);

TODO:
split the string by space
return the min num of the string
or return null
*/

const lowestTemp = t => Math.min(...t.split(' ')) || null;