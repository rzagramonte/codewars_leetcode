/*
Balanced Number (Special Numbers Series #1 )

A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal. If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.) The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.

Will the argument passed into the function always be a number?
Will the return always be a string?

console.log(balancedNum(7), 'Balanced', 'balancedNum(7)')
console.log(balancedNum(959), 'Balanced', 'balancedNum(959)')
console.log(balancedNum(13), 'Balanced', 'balancedNum(13)')
console.log(balancedNum(432), 'Not Balanced', 'balancedNum(432)')
console.log(balancedNum(424), 'Balanced', 'balancedNum(424)')
console.log(balancedNum(1024), 'Not Balanced', 'balancedNum(1024)')
console.log(balancedNum(66545), 'Not Balanced', 'balancedNum(66545)')
console.log(balancedNum(295591), 'Not Balanced', 'balancedNum(295591)')
console.log(balancedNum(1230987), 'Not Balanced', 'balancedNum(1230987)')
console.log(balancedNum(56239814), 'Balanced', 'balancedNum(56239814)')

TODO:
convert input number to an array of strings
return balanced for arrays less than three or 3 or 4 where the first and last element are the same
create variables for the first and and second half of the array minus the middle number
return correct string depending on whether firstHalf is equal in value to secondHalf
*/

const balancedNum = n => {
    n = [...n.toString()];
    const l = n.length;
    if(l < 3 || ((l == 3 || l == 4 ) && n[0] == n[2])) return 'Balanced';
    const firstHalf =  n.slice(0,l % 2 ? Math.floor(l/2) : l/2 - 1).reduce((a,c)=>a+(+c),0);
    const secondHalf = n.slice(l % 2 ? Math.ceil(l/2) : l/2 + 1).reduce((a,c)=>a+(+c),0);
    return firstHalf == secondHalf ? 'Balanced' : 'Not Balanced';
  };