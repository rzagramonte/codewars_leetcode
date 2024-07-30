/*
Find Maximum and Minimum Values of a List

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes
You may consider that there will not be any empty arrays/vectors.

old:
P.R.E.P.
paramters: an array
return: a number representing min or max of the array
examples:
(Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
pseudocode:
declare functions
set parameters
for min return Math.min(...list) - must use spreader to deconstruct the array
for max return Math.max(...list) - must use spreader to deconstruct the array
use return keyword for both

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

new:
Will the arguments passed into the functions always be an array of numbers?
Will the return always be a number?

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4,6,2,1,9,63,-134,566]), 566);
console.log(max([5]), 5);

TODO:
return the min and max number for each function, respectively
*/

let min = list => Math.min(...list), max = list => Math.max(...list);