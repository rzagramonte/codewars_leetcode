/*
Counting sheep...
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

P.R.E.P.
parameters: an array
return: a number representing the number of booleans as true there are in the array
examples/edge cases:
input => output
[true,false,true] => 2
pseudocode:
declare function named countSheeps
set parameter named arrayOfSheep
set variable named result to the value of a new array
use the map function to iterate over each element passed in through the parameter
if element is truthy, push it to the new array
return the length of the new array
*/

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let result = [];
    arrayOfSheep.map(element => {
      if(element){
        result.push(element);
      }
    });
    return result.length;
  }