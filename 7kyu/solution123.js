/*
Integer Difference
Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

Will the parameters always be an array and a number?
Will the elements of the input array always be numbers?
Will the return always be a number?

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
console.log(intDiff([1, 1, 3, 3], 2), 4);
*/

//declare constant variable intDiff which will be assigned to an arrow function
//set parameter arr and n
//declare variable results and assign to 0
//create nested for loop
//if the absolute value of element in outer loop minus element in inner loop is equal in value to n, increment results
//return results
const intDiff = (arr, n) => {
    // your code goes here
    let results = 0;
    for (let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(Math.abs(arr[i]-arr[j]) == n) results++
      }
    }
    return results;
  };