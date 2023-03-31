/*
Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

Will the parameter always be an array?
Will the array either be an empty array or an array where each element is a string?
Will the return always be an array?
Will the array either be an empty array or an array where each element is a string and that string is numbered with a colon and space proceeding right after to start?

console.log(number([]), []);
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
*/

//declare a variable named number and assign it to an arrow function
//set a parameter named array for the function
var number = (array) => {
    //your awesome code here
    //inside the function
    //declare a variable named results and assign it to an empty array
    let results = [];
    //create a for loop to iterate over the array passed into the function from the beginning of the array to its end
    for(let i = 0; i < array.length; i++){
        //for each loop: push into the results a string defined as "i+1: element"
      results.push(`${i+1}: ${array[i]}`);
    };
    //return results
    return results;
  };