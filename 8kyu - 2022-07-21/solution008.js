/*
Opposite number
Very simple, given an integer or a floating-point number, find its opposite.

Examples:
1: -1
14: -14
-34: 34

P. - parameters: integer or a floating-point number, positive or negavtive
R. - return: opposite of the number, postive or negative
E. - examples/edge cases: 
1: -1
14: -14
-34: 34
P. - pseudocode: declare a function or assign a function value to a variable
create one parameter for a number to be passed in
create a variable to hold the parameter
multiply and reasign the value in that variable to -1
return the result
*/

function opposite(number) {
    //your code here
    let result = number;
    result *= -1;
    return result;
  }