/*
Even or Odd - Which is Greater?

Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the individual odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"

Will the argument passed into the function always be a string?
Will the return always be a string?


console.log(evenOrOdd('12'), 'Even is greater than Odd');
console.log(evenOrOdd('123'), 'Odd is greater than Even');
console.log(evenOrOdd('112'), 'Even and Odd are the same');

find sum for odd nums
find sum for even nums
return correct string depending which is greater or if they're equal
*/

const evenOrOdd = str => {
    const odd = [...str].reduce((a,c) => a + (+c % 2 ? +c : 0), 0);
    const even = [...str].reduce((a,c) => a + (!(+c % 2) ? +c : 0), 0);
    return  odd > even ? "Odd is greater than Even" :  even > odd ? "Even is greater than Odd" : "Even and Odd are the same";
  };