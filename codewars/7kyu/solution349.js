/*
Geometry Basics: Triangle Perimeter in 2D

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

triangle object w three keys of point objects
point object w two keys of numbers

returns number fixed to 6 dec

console.log(trianglePerimeter( new Triangle( new Point(10, 10), new Point(40, 10), new Point(10, 50)) ), 120);
console.log(trianglePerimeter( new Triangle( new Point(15, -10), new Point(40, 20), new Point(20, 50)) ), 135.314734);

const AB, BC, CA = Math.sqrt((triangle.b.x-triangle.a.x)**2+(triangle.b.y-triangle.a.y)**2);
find distance of ab
bc
ca
add three distances for perimeter
*/

const trianglePerimeter = triangle => {
    const AB = Math.sqrt((triangle.b.x-triangle.a.x)**2+(triangle.b.y-triangle.a.y)**2);
    const BC = Math.sqrt((triangle.c.x-triangle.b.x)**2+(triangle.c.y-triangle.b.y)**2);
    const CA = Math.sqrt((triangle.a.x-triangle.c.x)**2+(triangle.a.y-triangle.c.y)**2);
    return +(AB + BC + CA).toFixed(6);
  };