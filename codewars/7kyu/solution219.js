/*
Beginner Series #3 Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.

Will the arguments passed into the function's parameter always be numbers?
Will the return always be a number?

console.log(getSum(0,-1), -1);
console.log(getSum(0, 1),  1);
console.log(getSum(2, 2),  2);

TODO:
if a and b are the same, return a
create new empty array to be reduced later on
if a is less than b, push numbers a to b into empty array
if a is greater than b, push numbers b to a into empty array
return the reduced array
*/

const getSum = (a, b) => {
    if(a == b) return a;
    let arr = []
    if(a<b){
      for(let i = a; i <= b; i++){
      arr.push(i);
      };
    }else if(a>b){
      for(let i = a; i >= b; i--){
      arr.push(i);
      };
    };
    return arr.reduce((a,b)=>a+b,0);
  };