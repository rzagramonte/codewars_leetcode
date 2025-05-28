/*
Heron's formula

Write function heron which calculates the area of a triangle with sides a, b, and c.

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)
s∗(s−a)∗(s−b)∗(s−c)
​
 
where: 
s=a+b+c / 2
s=2a+b+c
​
Notes
All inputs are valid triangles with integer sides.
You do not need to round anything. Answers will be tested for correctness within a margin of 0.01.
*/

function heron(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
}