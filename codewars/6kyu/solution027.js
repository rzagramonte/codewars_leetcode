/*
Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(solution(""), "");
console.log(solution("camelCasing"), "camel Casing");
console.log(solution("camelCasingTest"), "camel Casing Test");

replace all uppercase characters with space and said character
*/

const solution = string => string.replace(/[A-Z]/g, c =>` ${c}`);