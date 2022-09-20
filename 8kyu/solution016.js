/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

parameters: a number n, non-negative

return: a reverese array of numbers

examples/edge cases:
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

pseudocode:
create a function declaration or assign an anon function value to a const variable
convert number to string
split
reverse
convert strings to numbers
return array
*/

function digitize(n){
    return n.toString().split('').reverse().map(Number);
};