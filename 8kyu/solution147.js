/*
What's the real floor?

Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

Will n always be an integer; a whole number either positive or negative excluding the number 13?
Will the return always be an integer; a whole number either positive or negative?

console.log(getRealFloor( 1),  0);
console.log(getRealFloor( 5),  4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);
*/

//declare function and set parameter
function getRealFloor(n) {
    // use return keyword and ternary/conditional operator
    // if n is equal in value to 0 or 1 return 0
    // if n is greater than 1 and less than 13 return n-1
    // if n is greater than or equal to 14 return n-2
    // default return n
    return (n == 0 || n == 1) ? 0 : (n > 1 && n < 13) ? n-1 : (n >= 14) ? n-2 : n;
  }