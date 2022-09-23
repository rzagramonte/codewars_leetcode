/*
Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

P.R.E.P.
parameters: a string with two words and a space in between them
return: first letter of both words with a dot between them and both capital
examples:
Sam Harris => S.H
patrick feeney => P.F
pseudocode:
declare function
set parameter
declare variable splitNames and assign it to the parameter attached to the split method; split by space
declare variable firstName and it to assign splitNames.split[0] 
declare variable to firstInitial and assign it to firstName[0].toUpperCase()
declare variable lastName and it to assign splitNames.split[1] 
declare variable to lastInitial and assign it to lastName[0].toUpperCase()
return first letter + . second letter using a template literal
*/

function abbrevName(name){
    // code away
    let splitNames = name.split(' ');
    let firstName = splitNames[0];
    let firstInitial = firstName[0].toUpperCase();
    let lastName = splitNames[1];
    let lastInitial = lastName[0].toUpperCase();
    return `${firstInitial}.${lastInitial}`;
}