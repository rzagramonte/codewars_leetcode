/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

P.R.E.P.
parameters: a non-negative integer, num
return: a string that has a repeating chunk num times
examples:
3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."
pseudocode:
declare function
set parameter
declare variable sheepString and assign it to an empty string
use for loop
set i = 1
i <= num
i++
add and reassign sheepString with `${i} sheep...`
return sheepString
*/

var countSheep = function (num){
    //your code here
    let sheepString = '';
    for(let i=1; i<=num; i++){
        sheepString += `${i} sheep...`;
    }
    return sheepString;
  };

//refactored code:

/*
Will the parameter always be a number?
Will the number always be a whole number?
Will the return always be a string?

console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
*/

//create new shallow array from length value passed in
//interpolate 1+index into repeating string
//join array to string
const countSheep = num => Array.from({length:num}, (e,i)=>`${i+1} sheep...`).join('');