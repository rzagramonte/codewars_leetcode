/*
Lucky Bus Ticket

In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
isLucky('12341234') => false // Only six-digit numbers allowed :(
isLucky('12a21a') => false // Letters are not allowed :(
isLucky('100200') => false // :(
isLucky('22') => false // :(
isLucky('abcdef') => false // :(

Will the argument passed into the function always be a string?
Will the return always be a boolean of true or false?

console.log(isLucky('123321'), true)
console.log(isLucky('100001'), true)
console.log(isLucky('100200'), false)
console.log(isLucky('12341234'), false)
console.log(isLucky('12a12a'), false)
console.log(isLucky(''), false)

return true if first 3 sum up to the last 3 in the input string and string is the length of 6
else return false
*/

const isLucky = ticket =>  {
    if(ticket.length != 6) return false;
    if(isNaN(ticket)) return false
    if([...ticket].slice(0,3).reduce((a,c)=>a + +c,0) == [...ticket].slice(3).reduce((a,c)=>a + +c,0)) return true
    return false
  };