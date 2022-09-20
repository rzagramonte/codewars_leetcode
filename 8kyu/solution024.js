/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]


P.R.E.P.
parameters: n and x

return: an array of the first n multiples of x

example:
(x, n)
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

pseudocode:
declare function
set parameters x and n
let z equal an empty array
create for loop
let i = 1 set as the initializer
i <= n as the condition
i++ as the final expression
in the loop body push (using push method) x times i into the array z
then return z
*/

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(x * i);
    };
    return z;
  }