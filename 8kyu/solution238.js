/*
Expressions Matter

Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

Will the parameter always be three numbers?
Will the numbers always range in least to greatest?
Will the return always be a number?
Will the returned number be the maximum number possible?
*/

//declare const variable and assign to arrow function
//set parameters
//declare variables c1-c6
//assign to possible combinations using +, *, and ()
//return max number of c1-c6 using spread syntax
const expressionMatter = (a, b, c) => {
    let c1 = a * b * c;
    let c2 = a + b * c;
    let c3 = (a + b) * c;
    let c4 = a * b + c;
    let c5 = a * (b + c);
    let c6 = a + b + c;
    return Math.max(...[c1,c2,c3,c4,c5,c6]);
  };