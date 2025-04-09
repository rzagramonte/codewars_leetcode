/*
CamelCase Method

Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks :)

Will the input always be a string?
Will the output always be a string?

console.log("test case".camelCase(), "TestCase");
console.log("camel Case method".camelCase(), "CamelCaseMethod");
console.log("say hello".camelCase(), "SayHello");
console.log("camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
*/

//split string by word
//iterate over each word capitalizing the first letter
//join the words with no spaces
String.prototype.camelCase = function(){
    //your code here
    return this.split(' ').map(word=> word.slice(0,1).toUpperCase() + word.slice(1)).join('');
  }