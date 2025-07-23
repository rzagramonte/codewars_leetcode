/*
Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Will the argument passed into the function always be a string?
Will the return always be a boolean of true or false?

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("This is not a pangram."), false);
console.log(isPangram("abcdefghijklmnopqrstuvwxy ."), false);

TODO:
convert string to lowercase
replace everything but letter characters to empty string
pass it into a new set object
return true or false if size is 26
*/

const isPangram = str => new Set(str.toLowerCase().replace(/[^a-z]/g,'')).size == 26;