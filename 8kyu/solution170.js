/*
Remove the time

You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

Will the parameter always be a string?
Will the return always be a string without the time at the end?

console.log(shortenToDate("Friday May 2, 9am"), "Friday May 2");
console.log(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
console.log(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
*/

//declare function and set parameter
function shortenToDate(longDate) {
    //declare variable splitDate and assign it to long date split by ","
    let splitDate = longDate.split(',');
    //return the first element of splitDate
    return splitDate[0];
  }