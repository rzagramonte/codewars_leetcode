/*
Who ate the cookie?

For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Can the parameter be of any data type?
Will the return always be one of three strings?

console.log(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
console.log(cookie(26), "Who ate the last cookie? It was Monica!");
console.log(cookie(2.3), "Who ate the last cookie? It was Monica!");
console.log(cookie(true), "Who ate the last cookie? It was the dog!");
*/

//declare constant variable that will be assigned to an arrow function
//set parameter
//is the type of x a string? then return appropriate string
//else is the type of x a number? then return appropriate string?
//else return third string option
const cookie = x => typeof x == "string"? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";