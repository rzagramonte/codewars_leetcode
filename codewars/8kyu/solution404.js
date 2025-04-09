/*
Geometry Basics: Circle Area in 2D

Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.

@param function takes in an instance of a circle (object)
will always have a radius property
radius value will always be a number
return will always be number which will be the area of the circle
a = pi * radius ** 2


multiply pi with radius squared
*/

const circleArea = circle => Math.PI * circle.radius ** 2;

console.log(circleArea(new Circle(new Point(10, 10), 30)), 2827.433388);
console.log(circleArea(new Circle(new Point(25, -70), 30)), 2827.433388);
console.log(circleArea(new Circle(new Point(-15, 5), 0)), 0);
console.log(circleArea(new Circle(new Point(-15, 5), 12.5)), 490.873852);