/*
Student's Final Grade
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):
100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators.

P.R.E.P.
parameters: two numbers
return: one number
examples:
(Inputs-->Output):
100, 12 --> 100
99, 0 --> 100
10, 15 --> 100
85, 5 --> 90
55, 3 --> 75
55, 0 --> 0
20, 2 --> 0
pseudocode:
declare function
set parameters
create if else statement and comparison and logical operators
*/

function finalGrade (exam, projects) {

    if(exam > 90 || projects > 10){
        return 100;
    }else if(exam > 75 && projects >= 5){
        return 90;
    }else if(exam > 50 && projects >= 2){
        return 75;
    }else{
        return 0;
    }
  }

//refactored code:
/*
Will the parameter always be two numbers?
Will the first number always be from 0 to 100?
Will the second number always be greater than or equal to 0?
Will the return always be one number of 100, 90, 75, or 0?

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
console.log(finalGrade(10, 15), 100);
console.log(finalGrade(55, 3), 75);
console.log(finalGrade(55, 0), 0);
console.log(finalGrade(20, 2), 0);

do the exam and projects values fit into specified ranges? then return the appropriate number for each scenario
*/
const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;