/*
See You Next Happy Year

Given a year, Find The next happy year or The closest year You'll see your best friend

- year is always positive
- the answer exists
- it's not necessary that the year passed to the function is Happy one
- input Year with in range (1000  ≤  y  ≤  9000)

Will the argument passed into the function always be a number?
Will the return always be a number?

console.log(nextHappyYear(1001),1023);
console.log(nextHappyYear(1123),1203);
console.log(nextHappyYear(2001),2013);
console.log(nextHappyYear(2334),2340);
console.log(nextHappyYear(3331),3401);
console.log(nextHappyYear(1987),2013);
console.log(nextHappyYear(5555),5601);
console.log(nextHappyYear(7712),7801);
console.log(nextHappyYear(8088),8091);
console.log(nextHappyYear(8999),9012);

set i to year plus 1
create while loop
as long as the year does not have 4 distinct numbers, keep looping
for each looping, add 1 to i
return i
*/

const nextHappyYear = (year) => {
    let i = year + 1;
    while([...new Set(`${i}`)].length !=4){
      i++
    };
    return i;
};