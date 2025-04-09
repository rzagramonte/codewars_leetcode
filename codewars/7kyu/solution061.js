/*
Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

Will the parameter only either be null or an array?
If the parameter is an array, will the elements be numbers?
Can there be an instance where the array is empty?
Will the return be an array?
Will the array either be empty or contain numbers sorted in ascending order?
*/

//declare a constant variable which will be assigned to an arrow function
//set parameter nums
//if the negation of nums is truthy then return an empty array
//else return the array sorted in ascending order
const solution = nums => !nums ? [] : nums.sort((a,b)=>a-b);