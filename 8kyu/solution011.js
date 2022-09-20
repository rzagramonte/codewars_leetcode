/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

P. - parameters: an array and its elements; no empty arrays will be passed through
R. - return: a new array of every other element in the array starting with the first element
E. - edge cases/examples:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
P. - pseudocode:
declare a function
OR
set a function value to a variable; create a function expression
create a parameters - arr
pass in argument of array with elements
create for loop that loops starting at index 0 and increments by two
each iteration should push that element to the new array
dance
*/

function removeEveryOther(arr){
    //your code here
    let newArr = [];
    for(let i = 0; i < arr.length; i += 2){
        return newArr.push(arr[i]);
    };
    return newArr; 
};