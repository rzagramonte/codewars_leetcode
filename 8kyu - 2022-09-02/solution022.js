/*
Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
P.R.E.P.
parameters: a string
return: return the altered string
examples: 
eloquent => loquen
country => ountr
person => erso
place => lac
ooopss => oops
pseudocode:
declare a function
OR
assign an anon function to a variable and use an arrow function
create parameter str
split string into an array of substrings using split()
remove the first element using shift()
remove the last element using pop()
join the substrings into one string using join()
return modified string
*/

function removeChar(str){
    let arr = str.split('');
    let firstOff = arr.shift();
    let lastOff = arr.pop();
    return arr.join('');
}