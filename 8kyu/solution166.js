/*
101 Dalmatians - squash the bugs, not the dogs!
Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Will the parameter always be a number?
Will the return always be a string of "Hardly any", "More than a handful!", "Woah that's a lot of dogs!", or "101 DALMATIANS!!!"?

console.log(howManyDalmatians(26), "More than a handful!");
console.log(howManyDalmatians(8), "Hardly any");
console.log(howManyDalmatians(14), "More than a handful!");
console.log(howManyDalmatians(80), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(100), "Woah that's a lot of dogs!");
console.log(howManyDalmatians(101), "101 DALMATIANS!!!");
*/

//declare function and set parameter
function howManyDalmatians(number){
    //declare variable and assign it to array of strings
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    //declare variable and assign it to ternary operator
    //if number is less than or equal to 10 return first string in array
    //else if number is less than or equal to 50 return second element in array
    //else if number is equal in value to 101 return last element of array else return second to last element in array
    var respond = number <= 10 ? dogs[0] :
                  number <= 50 ? dogs[1] : 
                  number == 101 ? dogs[3] : dogs[2];
    //return respond value
    return respond;
  } 