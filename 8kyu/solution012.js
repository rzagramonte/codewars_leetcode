/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
P. - parameters: a number
R. - return: a string of "Even" or "Odd"
E. - examples/edge cases: 
1 - returns "Odd"
2 - returns "Even"
3 - returns "Odd"
4 - returns "Even"
5 - returns "Odd"
6 - returns "Even"
7 - returns "Odd"
8 - returns "Even"
9 - returns "Odd"
10 - returns "Even"
P. - pseudocode:
create a function declaration or assign a function value to a const variable
create a parameter called number
use ternary operator
if number is even return "even"
else return odd
*/

function even_or_odd(number) {
    return (number % 2 === 0 ? "Even" : "Odd");
}