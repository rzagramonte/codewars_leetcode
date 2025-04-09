/*
simple calculator

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!

Can the parameters be numbers or strings?
Will the return always be a number or string?

console.log(calculator(1,2,"+"), 3);
console.log(calculator(1,2,"-"), -1);
console.log(calculator(3,5,"*"), 15);
console.log(calculator(6,2,"/"), 3);
console.log(calculator(6,2,"$"), "unknown value");
console.log(calculator(6,"h","*"), "unknown value");
*/


//declare constant variable which will be assigned to an arrow function
//set parameters
//if either a or b is not a number, return "unknown value"
//else return a number if sign matches any of the cases
//else return "unknown value"
const calculator = (a,b,sign) =>{
    if(Number.isNaN(a) || Number.isNaN(b)){
      return  "unknown value";
    }else{
      switch(sign){
          case "+": return a + b;
          case "-": return a - b;
          case "*": return a * b;
          case "/": return a / b;
          default: return "unknown value";
      };
    };
    };