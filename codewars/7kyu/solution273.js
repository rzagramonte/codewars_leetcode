/*
Sum of Two Integers

Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .

Will the arguments passed into the function always be two numbers?
Will the return always be a number?

console.log(add(1, 2), 3)
console.log(add(5,19), 24)
console.log(add(23,17), 40)
console.log(add(-14,-16), -30);
console.log(add(-50,-176), -226);
console.log(add(-10,-29), -39);
console.log(add(-13,13), 0);
console.log(add(-27,18), -9);
console.log(add(-90,30), -60);

TODO:
use bitwise operators to add x and y
*/

const add = (x, y) => {
    while (x != 0){
      let c = y & x;
      y = y ^ x; 
      x = c << 1;             
    };
    return y;
  };