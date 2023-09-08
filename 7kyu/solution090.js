/*
Sort rectangles and circles by area II

In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
This kata inspired by Sort rectangles and circles by area.

Will the parameter always be an array?
Will the elements of the input array either be an array or a number?
Will the return always be a new array?
Will the elements of the new output array either be an array or a number?
Will the elements of the new output array be sorted in ascending order by area?

console.log(sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]), [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]);
console.log(sortByArea([ [2, 5], 6 ]), [ [2, 5], 6 ]);
console.log(sortByArea([]), []);
*/

//declare constant variable sortByArea which will be assigned to an arrow function
//return new array using slice method with no arguments passed in
//setting a and b as parameters in sort() method, sort new array in ascending order a-b
//is a an array? then multiply 1st element by 2nd, else multiply pi by a^2
//is b an array? then multiply 1st element by 2nd, else multiply pi by b^2

const sortByArea = array => array.slice().sort((a,b)=>(Array.isArray(a) ? a[0] * a[1] : Math.PI * a ** 2) - (Array.isArray(b) ? b[0] * b[1] : Math.PI * b ** 2));