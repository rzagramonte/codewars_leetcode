/*
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

Will the parameter always be three strings?
Will the input strings always be of the same length?
Will the return always be a string?

console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"), "Supermans");
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
*/

//declare const variable which will be assigned to arrow function
//set three parameters
//declare variable and assign to empty string
//create for loop
//add each character at the index for each string and add it to the current string variable and reassign
//return the string
const tripleTrouble = (one, two, three) => {
    let string = '';
    for(let i = 0; i < one.length; i++){
      string += one[i]+two[i]+three[i];
    };
    return string;
   };