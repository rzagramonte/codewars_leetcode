/*
Unexpected parsing

Here is a piece of code:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
Expected Behaviour
Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

Will the parameter always be a boolean of true or false?
Will the return always be a string of "busy" or "available"?

console.log(getStatus(true).status, "busy");
*/

//declare function
//set parameter
//declare variable and assign to conditional using ternary operator
//if isBusy is truthy, return "busy", else return "available"
//return object containing key value pair of status: msg
function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
      status: msg
    }
  }