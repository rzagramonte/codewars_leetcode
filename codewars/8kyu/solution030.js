/*
Grasshopper - Grade book
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60     'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

Will the parameters always be three numbers?
Will the numbers be only 0-100?
Will the return always be a string?
Will the string be "A", "B", "C", "D", or "F"?

console.log(getGrade(95,90,93), 'A);
console.log(getGrade(70,70,100), 'B');
console.log(getGrade(70,70,70), 'C');
console.log(getGrade(65,70,59), 'D');
console.log(getGrade(44,55,52), 'F');
*/

// declare variable getGrade and assign to arrow function
// set parameters s1, s2, s3
const getGrade = (s1, s2, s3) => {
    // assign variable average to (s1 + s2 + s3)/3
    let average = (s1 + s2 + s3)/3;
    // create if else statement to return the correct letter for the score
    return average >= 90 ? 'A':
           average >= 80 ? 'B':
           average >= 70 ? 'C':
           average >= 60 ? 'D':'F';
  };
