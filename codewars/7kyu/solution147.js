/*
Decreasing Inputs

This kata is all about adding numbers.

You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

  add(3,4,6); 

  returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
  
  Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

  Example
  
    add(); //=> 0
    add(1,2,3); //=> 3
    add(1,4,-6,20); //=> 6

Will the parameters always be numbers if any values are passed in?
Will the return always be a number?

console.log(add(), 0);
console.log(add(100, 200, 300), 300);
console.log(add(2), 2);
console.log(add(4, -3, -2), 2);
console.log(add(-1, -2, -3, -4), -4);
*/

//declare constant variable add which will be assigned to an arrow function
//set parameter nums with rest parameter
//reduce to one value while dividing by index plus 1
//round if floating point number
const add = (...nums) => Math.round(nums.reduce((a,c,i)=>a+c/(i+1),0));