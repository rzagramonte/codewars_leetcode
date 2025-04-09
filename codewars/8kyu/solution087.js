/*
Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

P.R.E.P.
parameters: an array
return: a number
example:
[9, 3, '7', '3'] => 22
['5', '0', 9, 3, 2, 1, '9', 6, 7] => 4
pseudocode:
declare function
set parameter
declare variable newArr and assign it to an empty array
create for loop
push Number(x[i]) into newArr
return newArr reduced to one number
*/


function sumMix(x){
    let newArr = []
    for(let i=0; i<x.length; i++){
        newArr.push(Number(x[i]))
    }
    return newArr.reduce((acc,c)=> acc+c,0);
}

//refactored code:
/*
Will the parameter always be an array?
Will the elements of the input array be a mix of number or strings?
Will the return always be one number?

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 4);
*/

//reduce array to one number
//convert c to num
const sumMix = x => x.reduce((acc,c) => acc + +c, 0);