/*
You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

P.R.E.P.
parameters: an array a and a value x (can be number or string)
return: boolean of true or false
examples:
input => output
a = [3,4,2,'string'] x = 'string' => true
a = [13,2,7,68,"roses with elephants bum navigatin malls"] x = 3 => 'false'
pseudocode:
declare function
set parameters
return a appended to includes() method with x passed in as an argument
includes() will return true or false accordingly
*/

function check(a, x) {
    // your code here
    return a.includes(x);
  }