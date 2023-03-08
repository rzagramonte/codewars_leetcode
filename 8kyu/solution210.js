/*
Regular Ball Super Ball

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

Will the parameter always be undefined or a string?
Will the return always be a string?

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
*/

//declare class and assign it to an anon function
//set parameter of ballType
var Ball = function(ballType) {
    // your code goes here
    //use this keyword and append it to the parameter
    //assign it to ballType if ballType is truthy, else assign it to 'regular'
    this.ballType=ballType || 'regular';
  };