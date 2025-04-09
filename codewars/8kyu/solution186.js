/*
Find the position!

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

Will the parameter always be a string with one letter?
Will the return always be a string that includes the position of the letter passed in?

console.log(position("a"),"Position of alphabet: 1");
console.log(position("z"),"Position of alphabet: 26");
console.log(position("e"),"Position of alphabet: 5");
*/

//declare function and set parameter
function position(letter){
    //Write your own Code!
    //use return keyword and template literal
    //use charCodeAt(0)
    //minus 97 since that is the code for a
    //add one to make it 1-based as a opposed to 0-based
      return `Position of alphabet: ${letter.charCodeAt(0) - 97 + 1}`;
    }