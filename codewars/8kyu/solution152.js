/*
Add Length

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

Will the parameter always be a string of at least one word?
Will the return always be an array of strings that have the number of characters at the end of the element?

console.log(addLength('apple ban'),["apple 5", "ban 3"]);
console.log(addLength('you will win'),["you 3", "will 4", "win 3"]);
*/

//declare function and set parameter
function addLength(str) {
    //start-here
    //declare variable splitStr and assign it to str
    //using dot notation, appended to the split() method where ' ' is passed in as an argument
      let splitStr = str.split(' ');
      //use return keyword and 
      //return splitStr using dot notation append map() method
      //in method parameter should be element
      //in function body use template literal to read element space length of element
      return splitStr.map(element =>`${element} ${element.length}`);
    }