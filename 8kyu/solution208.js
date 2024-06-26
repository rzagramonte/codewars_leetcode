/*
CSV representation of array

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Will the parameter always be an array of arrays?
Will the array's length always be greater than 2?
Will the return always be a string?

console.log(toCsvText([[ 0, 1, 2, 3, 45 ], 
                        [ 10,11,12,13,14 ],
                        [ 20,21,22,23,24 ],
                        [ 30,31,32,33,34 ]] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'));
console.log(toCsvText([[ -25, 21, 2, -33, 48 ],
                        [ 30,31,-32,33,-34 ]]),'-25,21,2,-33,48\n30,31,-32,33,-34');
console.log([[ 5,55,5,5,55 ],
            [ 6,6,66,23,24 ],
            [ 666,31,66,33,7 ]],'5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');
*/

//declare constant variable and assign to arrow function
const toCsvText = array => {
    // good luck
    //create for loop in a for loop
   for(let i = 0; i<array.length; i++){
     for(let j=0; j<array[i].length; j++){
        //in each inner array, join by ','
       array[i].join(',');
     };
   };
   //return outer array joined by '\n'
   return array.join('\n');
 };