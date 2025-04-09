/*
Primes in numbers

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

console.log(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")

TODO:
create a new object to store factors
set divisor to 2
create loop that runs while n is greater than 2
if n is divisible by the divisor and if the divisor exists in the factors object, push it into the array
else create a new key with the divisor in an array
else increment the divisor
return the wanted string
*/

const primeFactors = n => {

    const factors = {};
    let divisor = 2;
  
    while (n > 1) {
      if (!(n % divisor)) {
        if (factors[divisor]){
          factors[divisor].push(divisor)
        }else{
          factors[divisor] = [divisor]
        }
        n /= divisor;
      } else {
        divisor++;
      }
    }
    
    return Object.values(factors).map(e=>e.length == 1 ?  `(${e})` : `(${e[0]}**${e.length})`).join("");
  };