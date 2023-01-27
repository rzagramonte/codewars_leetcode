/*
Find the capitals

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

Will the parameter always be a string?
Will the return always be an array of numbers?

console.log(capitals('CodEWaRs'), [0,3,4,6]);
*/

//declare function and set parameter
var capitals = function (word) {
	// Write your code here
    //declare variable and assign it to an array with the elements being each character in the word string
  let letters = word.split('');
  //declare variable and assign it to an empty array
  let capitals = [];
  //create for loop to iterate over letters array
  for(let i = 0; i < letters.length; i++){
    //if letter is equal in value to letter as uppercase
    if(letters[i] == letters[i].toUpperCase()){
        //push letter's index to capitals array
      capitals.push(i);
    }
  }
  //return capitals array
  return capitals;
};