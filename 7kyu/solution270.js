/*
Special Number (Special Numbers Series #5)

Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not.

Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.

Will the argument passed into the function always be a number?
Will the return always be a string?

console.log(specialNumber(2),"Special!!");
console.log(specialNumber(3),"Special!!");
console.log(specialNumber(6),"NOT!!");
console.log(specialNumber(9),"NOT!!");
console.log(specialNumber(11),"Special!!");
console.log(specialNumber(55),"Special!!");
console.log(specialNumber(26),"NOT!!");
console.log(specialNumber(92),"NOT!!");
console.log(specialNumber(25432),"Special!!");
console.log(specialNumber(2783),"NOT!!");

TODO:
spread the number as a string into an array
return correct string if every element is less than or equal to 5 or not
*/

const specialNumber = n => [...`${n}`].every(e=>e<=5) ? "Special!!" : "NOT!!";
