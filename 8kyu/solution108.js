/*
Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome.

P.R.E.P.
parameters: a string
return: a boolean
examples:
input => output
("a") => true
("aba") => true
("Abba") => true
("hello") => false
("Bob") => true
("Madam") => true
("AbBa") => true
("") => true
pseudocode:
declare function
set parameter
return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
*/

function isPalindrome(x) {
    // your code here
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();
  }