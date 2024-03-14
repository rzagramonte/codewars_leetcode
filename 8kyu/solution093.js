/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

P.R.E.P.
parameters: string
return: string
examples:
input => output
"hello world" => "HELLO WORLD"
"HELLO WORLD" => "hello world"
"12345" => "12345"
pseudocode:
declare function
set parameter
declare variable newStr and assign it to an empty string
create for loop that iterates over a string
let i = 0
i < this.length
i++
create if else statement
if this[i] === this[i].toLowerCase() then newStr += this[i].toUpperCase()
else if this[i] === this[i].toUpperCase() then newStr += this[i].toLowerCase()
else newStr += this[i];
return newStr
*/

String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    let newStr = '';
    for(let i =0; i < this.length; i++){
      if(this[i] === this[i].toLowerCase()){
        newStr += this[i].toUpperCase();
      }else if(this[i] === this[i].toUpperCase()){
        newStr += this[i].toLowerCase();
      }else{
        newStr += this[i];
      }
    }
    return newStr;
  }

//refactored code:
/*
Will the parameter always be a string?
Will the return always be a string?

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");

replace all upper and lowercase letter with opposite
*/

String.prototype.toAlternatingCase = function () {
  return this.replace(/[a-z]/gi,l=>l == l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
};