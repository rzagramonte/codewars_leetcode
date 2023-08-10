/*
The mean of two means

Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.

Will the parameters always be an array and two numbers?
Will the elements of the input array always be numbers?
Will the return always be a number?

console.log(getMean([1,3,2,4],2,3),2.5);
console.log(getMean([1,3,2],2,2),2.25);
console.log(getMean([1,3,2,4],1,2),-1);
console.log(getMean([1,3,2,4],2,8),-1);
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//declare variable and assign to the mean of the first half of the array
//declare variable and assign to the mean of the second half of the array
//declare variable and assign to the mean of the means of first and second halves of the array
//to return: if x or y is less than or equal to 1, or if x or y is greater than the length of the given array, return -1 else return the overal mean
const getMean = (arr, x, y) => {
    let firstHalf = (arr.slice(0,x).reduce((a,c)=>a+c,0))/(arr.slice(0,x).length);
    let secondHalf = (arr.reverse().slice(0,y).reduce((a,c)=>a+c,0))/((arr.slice(0,y).length));
    let mean = (firstHalf + secondHalf)/2;
    return x <= 1 || y <= 1 || x > arr.length || y > arr.length ? -1 : mean;
  };