/*
Reversed sequence
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
P.R.E.P.
parameters: a number
return: is an array where the number given is arr[0] and it decrements from there in the following elements
example:
input => output
n=5 --> [5,4,3,2,1]
n=7 --> [7,6,5,4,3,2,1]
pseodocode:
assign an anon function to variable named reverseSeq
set parameter n
assign an empty array to a variable named newArr
create a for loop
i = n; i > 0; i--
in the body of the for loop: push i into an empty array
return newArr
*/

function reverseSeq(n) {
    let newArr = [];
    for(let i = n; i > 0; i--){
      newArr.push(i);
    }
    return newArr;
  }

//refactored code:

/*
Will the parameter always be a number?
Will the return always be an array?
Will the elements of the returned array always be numbers?
Will the numbers in the returned array always be in descending order?

console.log(reverseSeq(5), [5,4,3,2,1]);
console.log(reverseSeq(7), [7,6,5,4,3,2,1]);
*/

//create new array with length
const reverseSeq = n => Array.from({length:n},(e,i)=>e=i+1).reverse();