/*
Cogs

Kata Task
You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 75] means

1st cog has 100 teeth
2nd cog has 75 teeth
If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?

(use negative numbers for anti-clockwise rotation)

Notes
no two cogs share the same shaft

Will the argument passed into the function's parameter always be an array?
Can the array be of any length? -YES
Will the elements of the input array always be numbers?
Will the return always be a number?

console.log(cogRpm([100, 75]), -4/3);
console.log(cogRpm([100, 75, 50, 25]), -4);
*/

//divide first element with last element
//multiply result with 1 if array length is odd, -1 if it is even
const cogRpm = cogs => (cogs.length % 2 ? 1 : -1)  * cogs[0] / cogs[cogs.length-1];