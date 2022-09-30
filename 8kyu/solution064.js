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