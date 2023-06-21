/*
Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Will the parameters always be three numbers?
Will the return always be a boolean of true or false?

console.log(isTriangle(1,2,2), true);
console.log(isTriangle(7,2,2), false);
*/

//declare constant variable that will be assigned to arrow function
//set parameters
//if a+b is greater than c and b+c is greater than a and a+c is greater than b then return true, else return false
const isTriangle = (a,b,c) => a + b > c && b + c > a && a + c > b;