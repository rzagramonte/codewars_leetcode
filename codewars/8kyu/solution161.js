/*
Super Duper Easy

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

Will the parameter always be a number or a string?
Will the return always be a number or a string?

console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);
*/

//declare function and set parameter
function problem(x){
    //your code here
    //if typeof x is a string return "Error"
    //else return x * 50 + 6
    return typeof x == 'string' ? "Error" : x * 50 + 6;
  }