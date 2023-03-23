/*
Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Will the parameter always be a string?
Will the return always be a number?

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);
*/

//declare const variable and assign to arrow function
//set parameter
const findShort = s =>{
    //declare variable and assign to s split then iterated over using map()
    //callback function for map() is word being the parameter and return the length of word
    let words = s.split(' ').map(word=>word.length);
    //return the minimum value of words and use spread syntax to spread array into method
    return Math.min(...words);
  }