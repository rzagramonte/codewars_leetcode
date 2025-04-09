/*
Food combinations

Task:
Given an array containing a list of good foods, return a string containing the assertion that any two of the individually good foods are really good when combined.

Notes:
There are many different valid combinations of 2 foods it doesn't matter which one you choose.
But there should be 2 different foods listed unless there was only one food given in the input array.
Capitalization should be correct, the first given food should be capitalized, but the second should not.
The input array should not be modified by the method.

The test cases for this kata are fairly complicated, see if you can trick them. (Then let me know about it in the discourse.)

Will the argument passed into the function always be an array of strings?
Will the return always be a string?

console.log(actuallyReallyGood( [] ), "You know what's actually really good? Nothing!");
console.log(actuallyReallyGood( ['Peanut butter'] ), "You know what's actually really good? Peanut butter and more peanut butter.");
console.log(actuallyReallyGood(['Superglue','Skittles']),"You know what's actually really good? Superglue and skittles.");
console.log(actuallyReallyGood(['Cheese','Uranium']),"You know what's actually really good? Cheese and uranium.");

convert all words to lowercase and remove duplicates
return correct string depending on length of array
*/

const actuallyReallyGood = foods => {
    foods = [...new Set(foods.map(e=>e.toLowerCase()))];
    if(!foods.length) return "You know what's actually really good? Nothing!";
    if(foods.length == 1) return `You know what's actually really good? ${foods[0][0].toUpperCase()+foods[0].slice(1)} and more ${foods[0]}.`;
    if(foods.length>1) return `You know what's actually really good? ${foods[0][0].toUpperCase()+foods[0].slice(1)} and ${foods[1]}.`;
  };