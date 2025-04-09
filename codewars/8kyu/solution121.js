/*
Training JS #9: loop statement --while and do..while

Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.

P.R.E.P.
parameter(s): a string and a number
return: a string
examples:
input => output
("a",1) => "*a"
("a",2) => "*a*"
("a",3) => "**a*"
("a",4) => "**a**"
("a",5) => "***a**"
pseudocode:
declare function
set parameter(s)
declare variable i and assign it to 1
declare variabel splitStr and assign it to str.split('')
while i <= n
if i % 2 is truthy, unshift '*' to splitStr
else push '*' to splitStr
increment i
return splitStr as a string using join('')
*/

function padIt(str,n){
    //coding here
      let i = 1;
      let splitStr = str.split('');
      while(i <= n){
          if(i % 2){
              splitStr.unshift('*');
          }else{
             splitStr.push('*');
          }
          i++
      }
      return splitStr.join('');
    }