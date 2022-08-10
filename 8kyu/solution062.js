/*
If you can't sleep, just count sheep!!

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
  }