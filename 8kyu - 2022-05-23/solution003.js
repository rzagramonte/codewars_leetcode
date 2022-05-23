// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// P.R.E.P.
// P: parameters
// exponent: 0-n; non-negative number
//
// R: return is an array of numbers []
//
// E: examples
// 0 = 2^0
// 1 = 2^1
// 2 = 2^2
// 3 = 2^3
// 4 = 2^4
// 5 = 2^5
// 6 = 2^6
// P = 2^7
//
//P: pseudo code
//take in n the positive exponent
//create a new array to hold all the numbers
//pass n through a loop
//use a for loop to pass in the numbers with the given conditional
//push each result of taking n and placing it at the exponent of base 2 into the end of the array
//function will return an array of all these numbers

function powersOfTwo(n){//take in n; the positive exponent

    let result = [];//create a new array to hold all the numbers - can also be let result = new Array();

    //use a for loop to pass in the numbers with the given conditional

    for (let i = 0; i <= n; i++) {//pass n through a loop

      result.push(Math.pow(2, i));//push each result of taking n and placing it at the exponent of base 2 into the end of the array

    }

    return result;//function will return an array of all these numbers
  }