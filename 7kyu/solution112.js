/*
Vowel one

vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

Will the parameter always be a string?
Will the return always be a string of 0s and 1s?

console.log(vowelOne( "vowelOne" ), "01010101");
console.log(vowelOne( "123, arou" ), "000001011");
*/

//declare constant variable vowelOne which will be assigned to an arrow funciton
//set parameter s
//reassign s to all lowercase
//create variable and assign to empty string
//iterate over s
//if s is a vowel, add '1' to empty string
//else add '0' to empty string
//return new string
const vowelOne = s => {
    // ...
      s = s.toLowerCase();
    let newS = '';
    for(let i =0; i < s.length; i++){
      if (s[i] == 'a' || s[i] == 'i' || s[i] == 'o'||s[i] == 'u'||s[i] == 'e'){
        newS += '1'
      }else{
        newS += '0'
      }
    }
    return newS;
};