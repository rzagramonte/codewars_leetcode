/*
Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

Will the parameter always be a string?
Will the return always be a string?

console.log(toCamelCase(''), '');
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
*/

//declare variable and set parameter
//replace - and _ by every word with uppercase of the first letter of the word
const toCamelCase = str => str.replace(/[-_]\w/ig, match => match.charAt(1).toUpperCase());
