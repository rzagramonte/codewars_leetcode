/*
Check if a triangle is an equable triangle!

A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

Will the arguments passed into the function's parameters always be three numbers?
Will the return always be a boolean of true or false?

console.log(equableTriangle(5,12,13),true);
console.log(equableTriangle(2,3,4),false);
console.log(equableTriangle(6,8,10),true);
*/

//find semi-perimeter
//use Heron's formula to find area
//find perimeter
//is the area equal in value and type to the perimeter?
const equableTriangle = (a,b,c) => {
    const S = (a + b + c) / 2;
    const A = Math.sqrt(S*(S-a)*(S-b)*(S-c));
    const P = a + b + c;
    return A === P;
  };