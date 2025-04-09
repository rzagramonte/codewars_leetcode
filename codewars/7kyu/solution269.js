/*
Jumping Number (Special Numbers Series #4)

Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not.

Notes
Number passed is always Positive. Return the result as String. The difference between ‘9’ and ‘0’ is not considered as 1. All single digit numbers are considered as Jumping numbers.

Will the argument passed into the function always be a number?
Will the return always be a string?

console.log(jumpingNumber(1), "Jumping!!");
console.log(jumpingNumber(7), "Jumping!!");
console.log(jumpingNumber(9), "Jumping!!");
console.log(jumpingNumber(23), "Jumping!!");
console.log(jumpingNumber(32), "Jumping!!");
console.log(jumpingNumber(79), "Not!!");
console.log(jumpingNumber(98), "Jumping!!");
console.log(jumpingNumber(8987), "Jumping!!");
console.log(jumpingNumber(4343456), "Jumping!!");
console.log(jumpingNumber(98789876), "Jumping!!");

TODO:
spread number as a string into an array
iterate over array
if i is greater than 0 and the abs difference between the current element and the prev is equal to 1
starting from index 1, determine if every element is true and return correct string for either result
*/

const jumpingNumber = n => [...`${n}`].map((e,i,a)=> i>0 && Math.abs(e-a[i-1]) ==1).slice(1).every(e=>e) ? "Jumping!!" : "Not!!";