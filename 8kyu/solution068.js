/*
Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

P.R.E.P.
parameters: two strings
return: one string
examples:
input => output
(James, James) => 'Hello boss'
(Sam, Robert) => 'Hello guest'
pseudocode:
declare function
set parameters
create if else statement
if name === owner return 'Hello boss'
else return 'Hello guest'
*/

function greet (name, owner) {
    // Add code here
    return name === owner ? 'Hello boss' : 'Hello guest';
  }