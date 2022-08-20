/*
Basic Mathematical Operations
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

P.R.E.P.
parameters: an operator as a string and two numbers
return: a number representing the value of the combined expression
examples:
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
pseudocode:
declare function
set parameters
create switch case statement to go through each operator in the form of a string
return the evaluated numbers
*/

function basicOp(operation, value1, value2){
  // Code
  switch(operation){
    case '+':
        return value1 + value2;
        break;
    case '-':
        return value1 - value2;
        break;
    case '*':
        return value1 * value2
        break;
    default:
        return value1 / value2
        break;
  };
}