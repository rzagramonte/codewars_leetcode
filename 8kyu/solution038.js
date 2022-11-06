/*
Cat years, Dog years
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

Will the parameter always be a number?
Will the return always be an array?
Will the elements in the array always be three numbers?
Will the numbers always be positive?
Will the numbers always be whole counting numbers?

console.log(humanYearsCatYearsDogYears(1), [1,15,15]);
console.log(humanYearsCatYearsDogYears(2), [2,24,24]);
console.log(humanYearsCatYearsDogYears(10), [10,56,64]);
*/

//declare variable and assign to arrow function
//set parameter
var humanYearsCatYearsDogYears = humanYears => {
    //declare variable catYears and assign to 0
    let catYears = 0;
    //declare variable dogYears and assign to 0
    let dogYears = 0;
    //create switch case statement
    switch(humanYears){
        //if humanYears is equal to 1
        case 1:
        //add 15 to catYears
        catYears += 15;
        //add 15 to dogYears
        dogYears += 15;
        //break out of the switch case statement
        break;
        //if humanYears is equal to 2
        case 2:
        //add 24 to catYears
        catYears += 24;
        //add 24 to dogYears
        dogYears += 24;
        //break out of the switch case statement
        break;
        //default case if humanYears does not equal to 1 or 2
        default:
        //assign catYears to 24 + (4 * (humanYears - 2));
        catYears = 24 + (4 * (humanYears - 2));
        //assign dogYears to 24 + (4 * (humanYears - 2));
        dogYears = 24 + (5 * (humanYears - 2));
        //24 is the first two years
        //4 is years to multiply after the first 2 humanYears
        //humanYears-2 is the remaining humanYears after the first 2 humanYears
        //break out of the switch case statement
        break;
    };
    //return human, cat, and dog years in an array
    return [humanYears,catYears,dogYears];
  };