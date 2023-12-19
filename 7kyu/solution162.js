/*
Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

Will the parameter always be a string?
Will the return always be a boolean?

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);
*/

//declare variable and set parameter
//if str is all uppercase and passed into a new Set object then the size value is pulled, is this value equal to the length of str?
const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length;