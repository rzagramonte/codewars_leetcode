/*
Sum of Multiples

Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

Will the parameter always be two numbers?
Will the return either be a number or a string?

console.log(sumMul(0,0),"INVALID");
console.log(sumMul(2,9),20);
console.log(sumMul(4,-7),"INVALID");
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
const sumMul = (n,m) => {
    //if m is less than or equal to 0 then return "INVALID"
    if(m <= 0) return "INVALID";
    //declare variable using let and assign it to 0
    let sum = 0;
    //declare variable using let and assign it to 1
    let i = 1;
    //while n time i is less than m
    while (n * i < m) {
      //add the value of sum and add it to n times i and reassign sum with the new value
      sum += (n * i);
      //increment i by 1
      i++;
    };
    //return the value of sum
    return sum;
  };