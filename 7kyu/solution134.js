/*
Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

Will the parameter always be a number?
Will the return always be an array?
Will the elements of the returned array always be numbers?

console.log(fizzbuzz(10),[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
*/

//declare constant variable fizzbuzz which will be assigned to an arrow function
//set parameter n
//declare variable arr and assign it to an empty array
//create for loop
//if i is divisible by 3 AND 5 push 'FizzBuzz' into arr
//else if i is divisible by 3 push 'Fizz' into arr
//else if i is divisible by 5 push 'Buzz' into arr
//else push i into arr
//return arr
const fizzbuzz = n => {
    let arr = [];
    for(let i=1; i<=n; i++){
      if(!(i%3) && !(i%5)) arr.push('FizzBuzz');
      else if(!(i%3)) arr.push('Fizz');
      else if(!(i%5)) arr.push('Buzz');
      else arr.push(i);
    };
    return arr;
  };
  