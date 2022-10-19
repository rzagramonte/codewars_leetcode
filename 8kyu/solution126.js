/*
Filling an array (part 1)
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.

Is the parameter always going to be a number?
Is the parameter always going to be a positive integer?
Will the parameter always be one number?

return an array
In the array, will the elements always be numbers?
In the array, will the numbers be positive integers?
If there is no argument passed into the parameter, will the function return an empty array?

console.log(arr(5), [0,1,2,3,4])
console.log(arr(3), [0,1,2])
console.log(arr(9), [0,1,2,3,4,5,6,7,8])
*/

const arr = N => {
    //creating a variable and assigning it to an empty array
    let finalArr = [];
    //create a for loop
    //i = 0
    //i < N
    //i++
    for(let i = 0; i < N; i++){
        //push i into filledArr
        finalArr.push(i);
    }
    //return finalArr
    return finalArr;
};