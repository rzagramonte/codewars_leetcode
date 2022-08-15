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

const reverseSeq = n => {
    let newArr = [];
    for(let i = n; i > 0; i--){
      newArr.push(i);
    }
    return newArr;
  };