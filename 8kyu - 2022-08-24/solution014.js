/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
P. - parameters: a number, negative or positive, whole or decimal
R. - a negative number
E. - example/edge cases:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
P. - pseudocode: 
create function declaration or assign an anon function value to a variable
create parameter n for the number
if n < 0 return n
else return -n
use the ternary operator!
*/

function makeNegative(num) {
    // Code?
    return (num < 0 ? num : -num);
  }