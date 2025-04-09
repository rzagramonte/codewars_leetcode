/*
Automorphic Number (Special Numbers Series #6)

Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Notes
The number passed to the function is positive

Will the argument passed into the function always be a number?
Will the return always be a number?

console.log(automorphic(1),"Automorphic");
console.log(automorphic(3),"Not!!");
console.log(automorphic(6),"Automorphic");
console.log(automorphic(9),"Not!!");
console.log(automorphic(25),"Automorphic");
console.log(automorphic(53),"Not!!");
console.log(automorphic(76),"Automorphic");
console.log(automorphic(95),"Not!!");
console.log(automorphic(625),"Automorphic");
console.log(automorphic(225),"Not!!");

TODO:
does n squared end with n ?
return the correct string
*/

const automorphic = n => `${n**2}`.endsWith(n) ? "Automorphic" : "Not!!";