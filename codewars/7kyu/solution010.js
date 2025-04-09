/*
Changing letters

When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.

Will the parameter always be a string?
Will the return always be a string?

console.log(swap("   @@@"),"   @@@");
console.log(swap("HelloWorld!"), "HEllOWOrld!");
console.log(swap("Sunday"), "SUndAy");
console.log(swap("Codewars"), "COdEwArs");
console.log(swap("Monday"), "MOndAy");
console.log(swap("Friday"), "FrIdAy");
console.log(swap("abracadabra"), "AbrAcAdAbrA");
console.log(swap("AbrAcAdAbrA"), "AbrAcAdAbrA");
console.log(swap("ABRACADABRA"), "ABRACADABRA");
console.log(swap("ABRACADABRA"), "ABRACADABRA");
console.log(swap(""), "");
*/

//declare variable and assign it to an arrow function
//set parameter
//return string appended to either replace or replaceAll method
//pattern is a regex of [aieou]
//replacement is a function where each vowel passed in is replaced with vowel.toUpperCase();
const swap = string => {
    return string.replaceAll(/[aieou]/g, vowel=>vowel.toUpperCase());
  };