/*
Geometry Basics: Distance between points in 2D
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Tests compare expected result and actual answer with tolerance of 1e-6.

Will the parameters always be two objects?
Will the return always be a number?

console.log(new Point(3,3), new Point(3,3),0);
console.log(new Point(1,6), new Point(4,2),5);
console.log(new Point(-10.2,12.5), new Point(0.3,14.7),10.728001);
*/


//declare function and set parameter
function distanceBetweenPoints(a, b){
    //declare variable d and assign it to the square root of the difference of the x's and y's squared and added
    let d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    //return d with 6 decimal points as a number
    return Number(d.toFixed(6));
  }