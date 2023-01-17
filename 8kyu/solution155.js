/*
Template Strings

Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

Will the parameters always be a string?
Will the return always be a string?

console.log(TempleStrings("Animals","Good"), 'Animals are Good');
*/

//declare function and set parameters
var TempleStrings = function(obj, feature) {
    //return obj are feature using template literal
    return `${obj} are ${feature}`
  }