/*
Localize The Barycenter of a Triangle
The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

Will the parameters always be arrays with numbers for elements?
Will the return always be an array with two elements, each element a number?

console.log(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
console.log(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
console.log(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
console.log(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
console.log(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);
*/

//declare constant variable an assign to arrow function
//set three parameters
const barTriang = (p1, p2, p3) => {
    //your code here
    //declare variable and assign it to the sum of the first elements in all three arrays divided by 3
    //declare variable and assign it to the sum of the second elements in all three arrays divided by 3
    //use Number() to convert string to number
    //use toFixed(4) to round to nearest 4 decimals
    let x = Number(((p1[0] + p2[0] + p3[0])/3).toFixed(4));
    let y = Number(((p1[1] + p2[1] + p3[1])/3).toFixed(4));
    //return x and y in an array
    return [x,y];
  }