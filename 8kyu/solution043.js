/*
Training JS #2: Basic data types--Number

DESCRIPTION:
In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

old:
P.R.E.P.
parameters: two numbers from v1 to v6
return: a number value of 100
examples:
input => output
(50, 50) => 100
(150, 50) => 100
(50, 2) => 100
(200, 2) => 100
(250, 150) => 100
pseudocode:
insert the different variables into the corresponding functions
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}

new:
Will the arguments passed into the function always be two numbers?
Will the return always be a number?

console.log(equal1(),100);
console.log(equal2(),100);
console.log(equal3(),100);
console.log(equal4(),100);
console.log(equal5(),100);

TODO:
set a and b as parameters w default values of v1-v6
*/

let v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;
const equal1 = (a = v1, b = v1) => a + b;
const equal2 = (a =  v3, b =  v1) => a - b;
const equal3 = (a =  v1, b =  v5) => a * b;
const equal4 = (a =  v4, b =  v5) => a / b;
const equal5 = (a =  v6, b =  v3) => a % b;