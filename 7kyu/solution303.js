/*
Get initials from person name

Write function toInitials returns initials for a given person name. E.g: "Bill Gates" -> "B. G."

Note: initials should be separated with a space.

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(toInitials("Kerry King", "K. K."));
console.log(toInitials("Gary Holt", "G. H."));
console.log(toInitials("Robert C. Martin", "R. C. M."));

TODO:
split the string by space
iterate over array returning the first character and a period after
join the elements by a space
*/

const toInitials = name => name.split(' ').map(e=>`${e[0]}.`).join(' ');