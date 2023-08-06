/*
Thinkful - Number Drills: Quadratic formula

Remember all those quadratic equations you had to solve by hand in highschool? Well, no more! You're going to solve all the quadratic equations you might ever[1] have to wrangle with in the future once and for all by coding up the quadratic formula to handle them automatically.

Write a function quadratic_formula() that takes three arguments, a, b, and c that represent the coefficients in a formula of the form ax^2 + bx + c = 0. Your function shoud return a list with two elements where each element is one of the two roots. If the formula produces a double root the result should be a list where both elements are that value.

For example, quadraticFormula(2, 16, 1) should return the list [-0.06299606299409444, -7.937003937005906].

The order of the roots is not important.

[1] Well, not ever ever. You don't need to worry about getting quadratic equations with complex roots where you need the square root of a negative number. All the test cases will be for equations with real roots.

Will the parameters always be three numbers?
Will the return always be an array?
Will the elements in the returned array always be two integers?

console.log(quadraticFormula(2, 16, 1), [-7.937003937005906, -0.06299606299409444]);
console.log(quadraticFormula(4, 21, 3), [-5.103028450199876, -0.14697154980012384]);
console.log(quadraticFormula(6, 81, 3), [-13.462860791048776, -0.037139208951224134]);
*/

//declare variable which will be assigned to an arrow function
//set parameters
//declare variable x1 and set it to the first root
//declare variable x2 and set it to the second root
//return array with x1 and x2 values
const quadraticFormula = (a, b, c) => {
    // code goes here
    let x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    let x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
    return [x1, x2];
  };