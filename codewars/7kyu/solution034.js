/*
Alternating between three values

Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4

Will the parameter always be a number and an object?
Will the return always be a number?

console.log(f( 3, { a:3, b:4, c:5 } ), 4);
console.log(f( 4, { a:3, b:4, c:5 } ), 5);
console.log(f( 5, { a:3, b:4, c:5 } ), 3);
*/

//declare constant variable that will be assigned to arrow function
//set parameters
//does x equal in value to a in object cc? then return b in object cc
//does x equal in value to b in object cc? then return c in object cc
//does x equal in value to c in object cc? then return a in object cc
//if none of the above, return -1
const f = (x, cc) => x == cc.a ? cc.b : x == cc.b ? cc.c : x == cc.c ? cc.a : -1;