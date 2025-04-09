/*
Unscrambled eggs

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

Will the parameter always be a string?
Will the return always be a string?

console.log(unscrambleEggs("ceggodegge heggeregge"), "code here");
console.log(unscrambleEggs("FeggUNegg KeggATeggA"),"FUN KATA");
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter
//split by 'egg' then join by character
const unscrambleEggs = word => word.split('egg').join('');
