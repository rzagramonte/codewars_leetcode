/*
Contamination #1 -String-

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

Will the parameters always be a string?
Will the return always be a string?

console.log(contamination("abc","z"), "zzz");
console.log(contamination("","z"), "");
console.log(contamination("abc",""), "");
console.log(contamination("_3ebzgh4","&"), "&&&&&&&&");
console.log(contamination("//case"," "), "      ");
*/

//declare function and set parameters
function contamination(text, char){
    // Code here ;)
    //declare variable and assign it to text split by characters
    let textArr = text.split('');
    //create for loop
    for(let i=0; i < textArr.length; i++){
        //reassign each element to char
      textArr[i] = char;
    }
    //return textArr joined by character
    return textArr.join('');
  }

//refactored code:
//create new array in the size of text and fill it with char
//return string
const contamination = (text, char) => Array.from({length:text.length},e=>char).join('');