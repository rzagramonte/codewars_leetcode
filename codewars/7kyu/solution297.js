/*
Stanton measure

The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.


Will the argument passed into the function always be an array of numbers?
Will the return always be a number?

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]),3);
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]), 1);

TODO:
create an object to hold count
loop over array
if element is in the object, increment the value
else add it as a property and assign it to 1
return the value of the key of the value of the key "1" return or 0
*/

const stantonMeasure = a => {
    const count = {};
    
    for(const num of a){
      if(count[`${num}`]) count[`${num}`] += 1;
      else count[`${num}`] = 1;
    };
  
    return count[`${count["1"]}`] || 0;
};