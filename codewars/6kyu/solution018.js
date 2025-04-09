/*
Mexican Wave

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules
1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Will the argument passed into the function always be a string?
Will the return always be an array of strings?

console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
console.log(wave("codewars"), ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]);
console.log(wave(""), []);
console.log(wave("two words"), ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
console.log(wave(" gap "), [" Gap ", " gAp ", " gaP "]);

TODO:
create an array from the input string
iterate over array
return string from the beginning to i exclusive + uppercase current letter + string from i+1
filter elements in that arent equal in value to string
*/

const wave = s => Array.from(s,(e,i)=>s.slice(0,i)+e.toUpperCase()+s.slice(++i)).filter(e=>e!=s);