/*
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

Will the parameter always be a string?
Will the return always be a string?
Will the returned string always have any character minus lower or upper case vowels replaced with "!"?

console.log(replace("Hi!") , "H!!");
console.log(replace("!Hi! Hi!") , "!H!! H!!");
console.log(replace("aeiou") , "!!!!!");
console.log(replace("ABCDE") , "!BCD!");
*/

//declare constant variable that will be assigned to an arrow function
//set parameter
//replace all instances of lower and uppercase vowels with "!"
const replace = s => s.replace(/[aeiouAEIOU]/g,"!");