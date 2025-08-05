/*
Naughty or Nice?

In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

Examples:

bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'

Will the argument passed into the function always be an array of strings?
Will the strings in the array always have the first letter lowercased or the string be all lowercase?
Will the return always be a string? Will the string always be either "nice" or "naughty"

console.log(whatListAmIOn(["broke someone's window", "fought over a toaster", "killed a bug"]), "naughty");
console.log(whatListAmIOn(["got someone a new car", "saved a man from drowning", "never got into a fight"]), "nice");
console.log(whatListAmIOn(["broke a vending machine", "never got into a fight", "tied someone's shoes"]), "naughty");

TODO:
create variables for nice and naughty counts, set to 0
create regex string to test if string starts w nice or naughty letter
iterate over array
if first letter of string is g, s, or n, add 1 to nice and reassign
if first letter of string is b, f, or k, add 1 to naughty and reassign
*/

const whatListAmIOn = actions => {

  let nice = 0;
  let naughty = 0;
  
  const regexNice = /[gsn]/;
  const regexNaughty = /[bfk]/;
  
  for(const action of actions){
    if(regexNice.test(action[0])) nice += 1;
    if(regexNaughty.test(action[0])) naughty += 1;
  }
  
  return nice > naughty ? "nice" : "naughty";
};