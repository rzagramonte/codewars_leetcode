/*
Let's build a calculator.

Basic JS - Building a calculator

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()
Each method expects two arguments, so for instance:

Calculator.add(1,4) should return 5.

Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.

Will the parameters always be two numbers?
Will the return always be a number or false?

console.log(Calculator.add(2,4),6);
console.log(Calculator.subtract(5,3),2);
console.log(Calculator.multiply(9,2),18);
console.log(Calculator.divide(12,4),3);
console.log(Calculator.divide(33,0),false);
*/


//pass in parameters x and y for each and perform arthmetic operations
var Calculator = {
    add(x,y){
      return x + y
    },
      subtract(x,y){
      return x - y
    },
    multiply(x,y){
      return x * y
    },
    divide(x,y){
      return isFinite(x / y) ? x / y : false
    }
  };