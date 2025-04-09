/*
Inspiring Strings

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold

Will the parameter always be a string?
Will the words always be space separated?
Will the return always be a string?

console.log(longestWord('a b c d e fgh') , "fgh");
console.log(longestWord('one two three') , "three");
console.log(longestWord('red blue grey') , "grey");
*/

//create an array of length value of each word
//return word that the length equals the largest number in the array created
const longestWord = stringOfWords => {
    //Give me back the longest word!
    let arr = stringOfWords.split(' ').map(e=>e.length);
    return stringOfWords.split(' ').reverse().find(e=> e.length == Math.max(...arr));
  };