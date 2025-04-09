/*
All Star Code Challenge #3

This Kata is intended as a small challenge for my students

Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

Example (Input --> Output)

"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => ""

Will the parameter always be a string?
Will the return always be a string?

console.log(removeVowels("drake"),"drk");
console.log(removeVowels("aeiou"),"");
*/

//declare constant variable removeVowels which will be assigned to an arrow function
//set parameter
//replace all vowels with ''
const removeVowels = str => str.replace(/[aieou]/gi,'');