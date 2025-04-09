/*
Sorting Arrays

Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.

Will the parameter always be two arrays?
Will the elements in the two input arrays always be strings?
Will the return be a new array with the elements from the second array in a specific order?

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);
var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
console.log(sortArray(a1, a2), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);
var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
console.log(sortArray(a1, a2), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);
*/

//declare constant variable sortArray which will be assigned to an arrow function
//set parameters a1 and a2
//declare variable newArr and assign it to an empty array
//for loops tiiiime!
//create a for loop to iterate over a1 and a nested for loop to iterate over a2
//if the first letter in the element contained a1 is equal in value to the first letter in the element contained a2 then push a2's element into newArr
//return newArr
const sortArray = (a1, a2) => {
    let newArr = [];
    for(let i = 0; i<a1.length;i++){
      for(let j=0; j<a2.length;j++){
        if(a1[i][0] == a2[j][0]) newArr.push(a2[j]);
      };
    };
    return newArr;
  };