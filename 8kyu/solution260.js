/*
Return Two Highest Values in List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

Will the parameter always be an array?
Can the array be empty?
If the input array has elements, will the elements always be numbers?
Will the return always be an array?
Will the array either have 0, 1, or 2 elements?
If the returned array has elements, will they always be numbers?

console.log(twoHighest([]), []);
console.log(twoHighest([15]), [15]);
console.log(twoHighest([15, 20, 20, 17]), [20, 17]);
*/

//declare const variable, assign to arrow function, and set parameter
const twoHighest = arr => {
    if (arr.length == 0 || arr.length == 1) {//if length of arr is 0 or 1
        return arr; //return arr
    };
    //declare variable and assign to an array of one value being the max value found in arr
    let maxTwo = [Math.max(...arr)];
    arr.splice(arr.indexOf(Math.max(...arr)),1);//delete the element found in arr that is the max value
    
    if(maxTwo[0] == Math.max(...arr)){//if the element found in maxTwo is equal to the current max value in arr
      arr.splice(arr.indexOf(Math.max(...arr)),1); //delete it
    };
    //push the current max value in arr to maxTwo
    maxTwo.push(Math.max(...arr));
    //return maxTwo
    return maxTwo;
  };