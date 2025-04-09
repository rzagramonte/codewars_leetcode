/*
Primorial Of a Number

Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.

Notes
Only positive numbers will be passed (N > 0) .

Will the argument passed into the function always be a number/
Will the return always be a number?

console.log(numPrimorial(3),30);
console.log(numPrimorial(4),210);
console.log(numPrimorial(5),2310);
console.log(numPrimorial(8),9699690);
console.log(numPrimorial(9),223092870);

*/

const numPrimorial = n => {
    let product = 1, count = 0, num = 2;
    
    while (count < n) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        product *= num;
        count++;
      }
      num++;
    }
    return product;
  };
  
  
  
  
  