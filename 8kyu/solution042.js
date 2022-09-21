/*
Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

P.R.E.P.
parameters: an array of integers
return: an array where input[0] count of positive numbers and where input[1] === sum of negative numbers; ignore 0
examples:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
pseudocode:
1. declare function
2. set parameter
3. declare variable emptyArr and variable newArr each to an empty array
4. create if else statement
5. if input is null 
    a. return emptyArr
6. else if input is an empty array 
    a. return emptyArr
7. else
    a. declare variable posNums and set to input.filter(element => element > 0)
    b. newArr.push(posNums.length)
    c. declare variable negNums and set to input.filter(element => element < 0)
    d. newArr.push(negNums.reduce((acc,c)=>acc+c,0))
    e. return newArr
*/

function countPositivesSumNegatives(input) {
    // your code here
    let emptyArr = [];
    let newArr = [];
    if (input === null){
        return emptyArr;
    }else if(input.length === 0){
        return emptyArr;
    }else{
        let posNums = input.filter(element => element > 0);
        newArr.push(posNums.length);
        let negNums = input.filter(element => element < 0);
        newArr.push(negNums.reduce((acc,c) => acc + c, 0));
        return newArr;
    };
  }