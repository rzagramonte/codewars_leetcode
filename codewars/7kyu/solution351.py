'''
Geometry Basics: Circle Circumference in 2D

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.

Will the parameter always be an object?
Will the object always have a property of radius?
Will the return always be a number?

print(new Circle(new Point(10, 10), 30)).toFixed(6), 188.495559);
print(new Circle(new Point(25, -70), 30)).toFixed(6), 188.495559);
print(new Circle(new Point(-15, 5), 0)).toFixed(6), 0);
print(new Circle(new Point(-15, 5), 12.5)).toFixed(6), 78.539816);

TODO:
import math
multiply radius * 2 * pi
'''

import math
circle_circumference = lambda circle: math.pi * circle.radius * 2