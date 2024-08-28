/*
Scrolling Text

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!

Will the argument passed into the function always be a string?
Will the return always be an array of strings?

console.log(scrollingText("codewars"), [ "CODEWARS", "ODEWARSC", "DEWARSCO", "EWARSCOD", "WARSCODE", "ARSCODEW", "RSCODEWA", "SCODEWAR" ]
console.log(scrollingText("abc"), ["ABC","BCA","CAB"]);

TODO:
iterate over string
at each iteration return the text sliced from the current index plus from the start of the string up to the current index (exlcusive)
return each string uppercase
*/

const scrollingText = text => [...text].map((c,i)=>(text.slice(i)+text.slice(0,i)).toUpperCase());