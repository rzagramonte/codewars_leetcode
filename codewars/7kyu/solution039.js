/*
Make acronym

Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
Note: There will be at least two words in the given string!

Will the parameter always be a string?
Will the return always be a string?

console.log(toAcronym("Code Wars"),"CW");
console.log(toAcronym("Water Closet"),"WC");
console.log(toAcronym("Portable Network Graphics"),"PNG");
console.log(toAcronym("PHP: Hypertext Preprocessor"),"PHP");
console.log(toAcronym("hyper text markup language"),"HTML");
*/

//declare constant variable which will be assigned to an arrow function
//split string by space and place substrings into an array
//iterate over split array to place the first letter of each word capitalized as an element in a new array
//join new array by character, returning a string
const toAcronym = inp => inp.split(" ").map(word=>word[0].toUpperCase()).join("");
