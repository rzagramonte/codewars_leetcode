/*
String repeat
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
P.R.E.P.
parameters: an integer n and a string s
return: a string of s repeated exactly n times
examples:
(input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
pseudocode:
declare a function
OR
assign an anon function to a variable and use an arrow function
set two parameters, n and s
use string repeat() to append it to s and add n between the ()
*/

function repeatStr(n, s){
    return s.repeat(n);
}