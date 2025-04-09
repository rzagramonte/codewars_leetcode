/*
Disarium Number (Special Numbers Series #3)

Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

Will the argument passed into the function always be a number?
Will the return always be a string?

console.log(disariumNumber(89),"Disarium !!");
console.log(disariumNumber(564),"Not !!");
console.log(disariumNumber(1024),"Not !!");
console.log(disariumNumber(135),"Disarium !!");
console.log(disariumNumber(136586),"Not !!");

TODO:
spread the number as a string into an array
reduce the array where c is raised to the power of i+1
return correct string depending if the sum equals n or not
*/

const disariumNumber = n => [...`${n}`].reduce((a,c,i)=>a + c**(i+1),0) == n ? "Disarium !!" : "Not !!";

