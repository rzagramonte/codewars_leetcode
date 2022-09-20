// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// P.R.E.P.
//P: parameters
//one integer
//R: return
//return the smallest integer in an array
//E: exam/edge cases
//[5, 6, 2, 6, 1, 9] returns 1
//[11, 123, 55, 1, -4, 33] returns -4
//[0, 55, 7, 3, 2, 34] returns 0
//[23, 978, 3, -57, 90, 1] returns -57
//P: pseudo code
//create class
//create function in class
//pass in the array
//return the smallest number in the array

class SmallestIntegerFinder {//create class
    findSmallestInt(args) {//create function in class //pass in the array
      return Math.min(...args);//return the smallest number in the array
    }
  }
