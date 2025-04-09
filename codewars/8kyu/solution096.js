/*
Coefficients of the Quadratic Equation

In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax^2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c). Since there are infinitely many solutions to this problem, we fix a = 1. Remember, the roots can be written like (x-x1) * (x-x2) = 0

Example
quadratic(1,2) = (1, -3, 2)
This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

Example 2
quadratic(0,1) = (1, -1, 0)
This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

Notes
Inputs will be integers.
When x1 == x2, this means the root has the multiplicity of two

P.R.E.P.
parameters: two numbers
return: an array with three numbers
examples:
(0,1), [1, -1, 0]
(1,1), [1, -2, 1]
(-4,-9), [1, 13, 36]
(-5,-4), [1, 9, 20]
(4,-9), [1, 5, -36]
(5,-4), [1, -1, -20]
pseudocode:
declare function
set parameter
declare variable abc and assign it to an empty array
declare variable a and assign it to 1
declare variable b and assign it to -x2 - x1
declare variable c and assign it to -x1 * -x2
push a, b, and c into the array abc
return abc
*/

function quadratic(x1, x2){
    // Answer in array
      let abc = [];
      let a = 1;
      let b = -x2 - x1;
      let c = -x1 * -x2
      abc.push(a,b,c);
      return abc;
    }

//refactored code:

/*
Will the parameters always be two numbers?
Will the return always be an array?
Will the elements of the returned array always be numbers?

console.log(quadratic((0,1)),[1, -1, 0]);
console.log(quadratic((1,1)),[1, -2, 1]);
console.log(quadratic((-4,-9)),[1, 13, 36]);
console.log(quadratic((-5,-4)),[1, 9, 20]);
console.log(quadratic((4,-9)),[1, 5, -36]);
console.log(quadratic((5,-4)),[1, -1, -20]);
*/

//create new array use square brackets
//directly add the three elements needed
const quadratic = (x1, x2) => [1, -x2 - x1, -x1 * -x2];