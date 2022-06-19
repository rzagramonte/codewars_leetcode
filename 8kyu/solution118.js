/*
Training JS #5: Basic data types--Object
Give you a function animal, accept 1 parameter:obj like this:
{name:"dog",legs:4,color:"white"}
and return a string like this:
"This white dog has 4 legs."

P.R.E.P.
parameter(s): an object
return: a string
examples:
input => output
({name:"dog",legs:4,color:"white"}) => "This white dog has 4 legs."
({name:"cock",legs:2,color:"red"}) => "This red cock has 2 legs."
({name:"rabbit",legs:4,color:"gray"}) => "This gray rabbit has 4 legs."
pseudocode:
declare function
set parameter(s)
return template literal
*/

function animal(obj){
    return `This ${animal.color} ${animal.name} has ${animal.legs}.`
  }
  
  