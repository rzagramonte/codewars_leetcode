/*
Exclamation marks series #1: Remove an exclamation mark from the end of string

Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

Will the parameter always be a string?
Will the return always be a string?

console.log(remove ("Hi!"),"Hi");
console.log(remove ("Hi!!!"),"Hi!!");
console.log(remove ("!Hi"),"!Hi");
console.log(remove ("!Hi!"),"!Hi");
console.log(remove ("Hi! Hi!"),"Hi! Hi");
console.log(remove ("Hi"),"Hi");
*/

//declare function and set parameter
function remove (string) {
    //coding and coding....
    //declare variable and assign it to string attached to split() method using dot notation and passing in '' as the argument
    let stringArr = string.split('');
    //if the last element in the array equals in value to '!'
     if(stringArr[stringArr.length-1] =='!'){
        //pop the element off the array
       stringArr.pop(stringArr[stringArr.length-1]);
     }
     //return the modified array as a string joined by '' using the join() method
    return stringArr.join('');
  }

//refactored code:
/*
Will the parameter always be a string?
Will the return always be a string?

console.log(remove("Hi!"),"Hi");
console.log(remove("Hi!!!"),"Hi!!");
console.log(remove("!Hi"),"!Hi");
console.log(remove("!Hi!"),"!Hi");
console.log(remove("Hi! Hi!"),"Hi! Hi");
console.log(remove("Hi"),"Hi");

replace all '!' at the end of the string with ''
*/

const remove = string => string.replace(/\!$/g, '');