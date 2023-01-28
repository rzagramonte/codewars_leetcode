/*
No Loops 2 - You only need one

*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

No Loops 1 - Small enough?

Will the parameters always be an array and a number?
Will the return always be a boolean of true or false?

console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
*/


//declare function and set parameter
function check(a,x){
    //use return keyword
    //a includes x
    return a.includes(x);
  };