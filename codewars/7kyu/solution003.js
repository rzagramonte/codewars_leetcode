/*
Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Will the parameter always be a string?
Will the return always be a string where each word has its letters reversed and the spaces remain in place?

*/

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'),'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'),'elppa');
console.log(reverseWords('a b c d'),'a b c d');
console.log(reverseWords('double  spaced  words'),'elbuod  decaps  sdrow');

//declare function and set parameter
function reverseWords(str) {
    // Go for it
    //declare variable words and assign it to split str by a space
    let words = str.split(' ');
    //declare variable reversedWords and assign it to the variable words appened to the map function where it splits each word by character, reverses it, and joins it by character and returns an array of the results
    let reversedWords = words.map(word=>word.split('').reverse().join(''));
    //return reversedWords as a string by appending the join method and its argument a space
    return reversedWords.join(' ');
  }