/*
Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1 --> [1]

P.R.E.P.
parameters: number, n
return: an array from 1 to n
examples:
10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1 --> [1]
pseudocode:
declare function
set parameter
declare variable and assign it to empty array
create for loop
push i into array
*/

function monkeyCount(n) {
    // your code here
    let monkeys = [];
    for(let i = 1; i <= n; i++){
        monkeys.push(i);
    };
    return monkeys;
    }

//refactored code:
/*
Will the parameter always be a number?
Will the return always be an array?
Will the elements of the returned array always be numbers?

console.log(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(monkeyCount(1), [1]);
*/

//create new array with n as the length
//map over array adding 1 to index of each slot
const monkeyCount = n => Array.from({length:n},(e,i)=>i+1);