/*
We need these data immediately!

So we've had nifty-well-working javascript function

returnSomeData()
that was returning useful data, but recently it stopped work.

There is some strange error. Can you find it out, what has changed?

Will the parameter always be a number?
Will the return always be an object?

*/

//declare variable time and assign it to the Date.now()
var time = Date.now()
//declare variable and assign it to an IFEE
var data = (function returnSomeData(time) {//set parameter time
  return { //return object
    name: '__B00013',
    timeStamp: time || 'unknown',    
    type: 'raw',
    var1: 0x041451,
    var2: 0x00,
    var3: 0x00040
  }
})()