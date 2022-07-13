/*
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

P.R.E.P.
parameters: a string
return: a string
examples:
(Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
pseudocode:
declare function
set parameter
declare variable and set it to an empty array
declare a variable and set it to split the string
create for loop to iterate over the array
push element,element into array
join the array
return the new string
*/

function doubleChar(str) {
    // Your code here
    let newStr = [];
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++){
        newStr.push(strArr[i],strArr[i]);
    }
    return newStr.join('');
  }
  