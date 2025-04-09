/*
Keep up the hoop

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".

P.R.E.P.
parameter: number
return: string
example: 
input => output
5 => "Keep at it until you get it"
12 => "Great, now move on to tricks"
pseudocode:
declare function
set parameter
create if else statement
if n >= 10 return "Great, now move on to tricks"
else if n < 10 return "Keep at it until you get it"
*/

function hoopCount (n) {
    //your code goes here
    return n>=10 ? "Great, now move on to tricks" : "Keep at it until you get it"
 }