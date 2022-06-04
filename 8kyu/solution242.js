/*
Switch/Case - Bug Fixing #6

Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

Will the input be a function with a switch case statement in its body?
Will the output be a function with a switch case statement that returns the correct result value?

console.log(evalObject({a:1,b:1,operation:'+'}), 2);
console.log(evalObject({a:1,b:1,operation:'-'}), 0);
console.log(evalObject({a:1,b:1,operation:'/'}), 1);
console.log(evalObject({a:1,b:1,operation:'*'}), 1);
console.log(evalObject({a:1,b:1,operation:'%'}), 0);
console.log(evalObject({a:1,b:1,operation:'^'}), 1);
*/

//declare const variable and assign to arrow function
//set parameter
const evalObject = value => {
  //create switch case statement
  //variable for switch will be the operation property in the object passed in
  //return the appropriate expressions for each case
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  };
};