/*
Dollars and Cents

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!

Will the parameter always be a number?
Will the return always be a string?

console.log(formatMoney(39.99), '$39.99');
*/


//declare a constant variable which will be assigned to an arrow function
//set parameter
//if the penultimate character in amount as a string is "." then return amount as a string with "0" at the end
//else if amount as a string includes "." return amount as a string
//else return amount as a string with ".00" at the end
const formatMoney = amount => `${amount}`[`${amount}`.length-2] == "." ? `$${amount}0` : `${amount}`.includes(".") ? `$${amount}` : `$${amount}.00`;