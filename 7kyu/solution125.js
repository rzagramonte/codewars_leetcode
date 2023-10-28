/*
Elevator Distance

Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

Will the parameter always be an array?
Will the return always be a number?

console.log(elevatorDistance([5,2,8]), 9);
console.log(elevatorDistance([1,2,3]), 2);
console.log(elevatorDistance([7,1,7,1]), 18);
*/

//declare constant variable elevatorDistance which will be assigned to an arrow function
//set parameter array
//declare variable distance and assign it to 0
//iterate over array
//for each element:
//if i is at the penultimate slot
//add to distance and reassign the sum: subtract the current element with the next
//return distance
const elevatorDistance = array => {
    // your code here
    let distance = 0;
    array.forEach((n,i)=>{
        if (i < array.length - 1) { // Check if we are not at the last element
        distance += Math.abs(n - array[i + 1]);
      }
    })
    return distance;
  };

