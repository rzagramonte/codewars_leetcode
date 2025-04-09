/*
Sum of angles

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

Will the parameter always be a number?
Will the return always be a number?

console.log(angle(3), 180);
console.log(angle(4), 360);
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//multiply the difference between n and 2 times 180
const angle = n => (n-2) * 180;