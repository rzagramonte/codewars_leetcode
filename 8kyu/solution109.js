/*
Is it even?

In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

P.R.E.P.
parameters: a number
return: a boolean
examples:
input => output
(0) => true
(0.5) => false
(1) => false
(2) => true
(-4) => true
pseudocode:
declare function
set parameter
return n % 2 === 0
*/

function testEven(n) {
    //Your awesome code here!
  return n % 2 === 0;
}