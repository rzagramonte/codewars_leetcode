/*
Persistent Bugger.

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

Will the argument passed into the function always be two numbers?
Will the return always be a number?

console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);

TODO:
create a recursion!
base case should return count if num is one digit
recursive case is calling the function with the product of the digits and count + 1
*/

const persistence = (num, count=0) => {
    if(num.toString().length == 1) return count;
    const prodDigits = [...num.toString()].reduce((a,c)=>a*c,1);
    return persistence(prodDigits, count + 1);
  };