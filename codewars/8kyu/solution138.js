/*
Vowel remover

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

Will the parameters always be one string?
Will the return always be a string containing only consonants and in all lowercase?

*/
console.log(shortcut ("hello"),"hll")
console.log(shortcut ("codewars"),"cdwrs")
console.log(shortcut ("goodbye"),"gdby")
console.log(shortcut ("HELLO"),"HELLO")

//declare function and set parameter
function shortcut (string) {
    //use return keyword to return the string chained to the replaceAll method using dot notation
    //pattern should be 'a','e','i','o', and 'u'
    //replacement should be ''
  return string.replaceAll('a', '')
    .replaceAll('e','')
    .replaceAll('i','')
    .replaceAll('o','')
    .replaceAll('u','');
  }

//refactored code:

/*
Will the parameters always be one string?
Will the return always be a string containing only consonants and in all lowercase?

console.log(shortcut ("hello"),"hll")
console.log(shortcut ("codewars"),"cdwrs")
console.log(shortcut ("goodbye"),"gdby")
console.log(shortcut ("HELLO"),"HELLO")
*/

//declare function and set parameter
//use return keyword to return the string chained to the replace method using dot notation
//pattern should be 'a','e','i','o', and 'u'
//replacement should be ''
const shortcut = string => string.replace(/[aeiou]/gi, "");