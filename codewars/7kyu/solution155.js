/*
Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Will the parameter always be a string?
Will the return always be a boolean of true or false?

console.log(validatePIN("1234"),true);
console.log(validatePIN("123456"),true);
console.log(validatePIN("123456"),true);

console.log(validatePIN("a234"),false);
console.log(validatePIN(".234"),false);

console.log(validatePIN("1"),false);
console.log(validatePIN("1234567"),false);
console.log(validatePIN("-1.234"),false);
*/

//declare function to test pin is in the parameters
function validatePIN (pin) {
    //return true or false
   
    return /^(\d{4}|\d{6})$/.test(pin);
    }