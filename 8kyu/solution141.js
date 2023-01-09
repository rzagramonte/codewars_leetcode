/*
Grasshopper - Order of operations

Grasshopper Order of Operations
You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

Will the always be no parameters?
Will the return always be 32 in this case?

console.log(orderOperations(), 32)
*/

//declare function
function orderOperations () {
    //use return keyword and parenthesis in the proper locations
    return (2 + 2) * (2 + 2) * 2;
  }