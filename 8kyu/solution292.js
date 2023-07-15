/*
Power

The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.

Will the parameters always be two numbers?
Will the numbers always be greater than or equal to zero?
Will the return always be a number?
Will the returned number always be greater than 0?

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);
*/


//declare constant variable which will be assigned to an arrow function
//set parameters
//declare reassignable variable and assign it to 1
//create for loop where initialization will set i to 0, stopping condition will set i as less than power, and for the final expression, i will be incremented by 1 after each loop
//loop body: multiply pow with number and assign the product to pow
//return pow
const numberToPower = (number, power) => {
    console.info(Math.log2(1024));
    // Code here
    let pow = 1;
    for(let i = 0; i < power; i++){
      pow *= number;
    };
    return pow;
  };