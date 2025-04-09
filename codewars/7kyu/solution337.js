/*
Lottery machine

Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"), "805", "should return unique integer(s) or a string");
console.log(lottery("ffaQtaRFKeGIIBIcSJtg"),"One more run!", "should return unique integer(s) or a string");

TODO:
filter out duplicates
convert to an array
filter digits only
join the array to a string
or return 'One more run!'
*/

const lottery = str => [...new Set(str)].filter(e=>/\d/.test(e)).join('') || 'One more run!';