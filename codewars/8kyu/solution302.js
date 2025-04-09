/*
Collatz Conjecture (3n+1)

The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

Will the parameters always be two numbers?
Will the return always be one number?

console.log(hotpo(1), 0);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);
*/

//declare constant variable which will be assigned to arrow function
//set parameters and default value of 0 for i
//if the negation of n is truthy or if n is equal in value to 1, then return i
//else:
//if the negation of n mod 2 is truthy, increment i by 1 and recall the function passing in n divided by 2 and the current value for i
//else increment i by 1 and recall the function passing in 3 times n plus 1 and the current value for i
const hotpo = (n, i = 0) => {
    if(!n || n == 1) return i;
    else{
      if(!(n%2)){
        i += 1;
        return hotpo(n/2, i);
      }else{
        i += 1;
        return hotpo(3*n+1, i);
      };
    };
  };
  