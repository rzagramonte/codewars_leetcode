/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

Will the parameter always be a number?
Will the return always be a number?

console.log(solution(10),23);
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//if number is less than 0, return 0
//declare variable sum and assign to 0
//create for loop that starts at 1 and ends when i is less than number, incrementing i at each turn of the loop
//if the negation of i modulous 5 is truthy and the negation of i modulous 3 is truthy, add i to sum
//if the negation of i modulous 5 is truthy, add i to sum
//if the negation of i modulous 3 is truthy, add i to sum
//else add 0 to sum
//return sum
const solution = number => {
    if(number < 0) return 0;
    let sum = 0;
    for (let i = 1; i < number; i++){
      !(i%5) && !(i%3) ? sum += i :
      !(i%5) ? sum += i :
      !(i%3) ? sum += i : sum += 0 ;
    };
    return sum;
  };