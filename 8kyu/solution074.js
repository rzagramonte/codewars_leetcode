/*
Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

P.R.E.P.
parameters: two numbers
return: one number
examples:
(60,60) => 60
(50,70) => 60
(50,50) => 80
pseudocode:
declare function
set parameters
return 180 - (a + b)
*/
function otherAngle(a, b) {
    return 180 - (a + b);
  }