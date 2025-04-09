/*
Grasshopper - Basic Function Fixer

Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

Will the parameter always be a value of the number type?
Will the return always be the number passed in plus 5?

console.log(addFive(5), 10);
console.log(addFive(0), 5);
console.log(addFive(-5), 0);
*/

//declare function and set parameter
function addFive(num) {
    //declare variable total and assign it to num plus five
    var total = num + 5
    //use return keyword to return the value of total
    return total;
  }