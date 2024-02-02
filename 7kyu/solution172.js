/*
Fizz / Buzz

Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]

Will the parameter always be an integer?
Will the return always be an array?
Will the elements of the returned array always be numbers?
Will the size of the returned array always be 3?

console.log(solution(20), [5, 2, 1]);
console.log(solution(2), [0, 0, 0]);
console.log(solution(14), [4,2,0]);
console.log(solution(30), [8, 4, 1]);
console.log(solution(141), [37, 19, 9]);
*/

//create new array with 3 0's
//loop until number exclusive and increment each element based on conditionals
//return arr
const solution = number => {
    let arr = [0,0,0];
    for(let i=1; i<number; i++){
      if(!(i%3) && i%5) arr[0]++;
      if(!(i%5) && i%3) arr[1]++;
      if(!(i%3) && !(i%5)) arr[2]++;
    };
    return arr;
  };