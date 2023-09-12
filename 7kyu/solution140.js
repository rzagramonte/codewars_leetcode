/*
Plus - minus - plus - plus - ... - Count

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];


| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;

Will the parameter always be an array?
Will the elements of the input array always be numbers?
Will the return always be a number?

console.log(catchSignChange([]), 0);
console.log(catchSignChange([1,3,4,5]), 0);
console.log(catchSignChange([-1,-3,-4,-5]), 0);
console.log(catchSignChange([1,-3,-4,0,5]), 2);
console.log(catchSignChange([-47,84,-30,-11,-5,74,77]), 3);
*/

const catchSignChange = arr => {
    // TODO create variable to store count and loop over array
    let count = 0;
    for(let i=1; i<arr.length; i++){
      if((Math.sign(arr[i-1])>-1 && Math.sign(arr[i])<0) || (Math.sign(arr[i-1])<0 && Math.sign(arr[i])>-1)) count+=1;
    };
    return count;
  };