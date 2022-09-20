/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

P.R.E.P.
parameters: two numbers l for length and w for width
return: if l === w return area if l > w || l < w return perimeter
examples:
(Input1, Input2 --> Output):
6, 10 --> 32
3, 3 --> 9
pseudocode:
declare function
set parameters
create if else statement using ternary operator
if l === w return area else return perimeter
*/

const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * l + 2 * w;