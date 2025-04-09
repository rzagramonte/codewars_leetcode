/*
methods of Math---round() ceil() and floor()

Task
Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

roundIt(3.45) should return 4
If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

roundIt(34.5) should return 34
If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

roundIt(34.56) should return 35

Will the parameter always be a number?
Will the return always be a number?

console.log(roundIt(3.45) , 4);
console.log(roundIt(34.5) , 34);
console.log(roundIt(34.56) , 35);
*/


//declare constant variable which will be assigned to an arrow function
//set parameter
//declare variable and assign to an array of substrings split by "."
//if length of first element in the array is less than the second, return the number rounded up
//if length of first element in the array is greater than the second, return the number rounded down
//if length of first element in the array is equal in value to the second, return the number rounded
const roundIt = n =>{
    let arr = n.toString().split('.');
    if (arr[0].length < arr[1].length) return Math.ceil(n);
    if (arr[0].length > arr[1].length) return Math.floor(n);
    if (arr[0].length == arr[1].length) return Math.round(n);
  };