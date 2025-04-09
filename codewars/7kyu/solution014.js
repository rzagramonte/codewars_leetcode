/*
Remove the minimum

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Will the parameter always be an array?
Will the elements or items in the array always be numbers?
Can the numbers be whole or floating point numbers?
Can the numbers be positive or negative?
Can the parameter be an empty array?

Will the return always be an array?
Will the return be the orginial array?
Will the elements or items in the array returned always be numbers?
Can the numbers be whole or floating point numbers?
Can the numbers be positive or negative?
Can the array returned be empty?

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1);
console.log()removeSmallest([]), [];
*/

//declare const variable and assign it to an arrow function
//set parameter
const removeSmallest = numbers => {
    //declare variable and set to smallest number in the array numbers
    let smallestNum = Math.min(...numbers);
    //declare variable and set to the index of smallestNum
    let index = numbers.indexOf(smallestNum);
    //return array from index 0 to index of smallestNum not inclusive and array from the index after smallestNum to the end of the array if index of smallestNum is found
    //use spread syntax to spread out the elements of the array
    //else return the array numbers
    return index !== -1 ? [...numbers.slice(0, index), ...numbers.slice(index + 1)] : numbers;
  };