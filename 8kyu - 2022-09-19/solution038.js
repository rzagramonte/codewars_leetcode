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
P.R.E.P.
parameter: a number in humanYears
return: an array of three numbers [humanYears,catYears,dogYears]
examples:
pseudocode:
declare function
set parameter
declare variables catYears and dogYears and assign each to 0
create switch case statement for each variable going over the three conditions for each
for the code to run if condtions are met add and reassign the values to the respective variables
return [humanYears,catYears,dogYears]
*/
var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears = 0;
    let dogYears = 0;
    switch(humanYears){
        case 1:
        catYears += 15;
        dogYears += 15;
        break;
        case 2:
        catYears += 24;
        dogYears += 24;
        break;
        default:
        catYears = 24 + (4 * (humanYears - 2));
        dogYears = 24 + (5 * (humanYears - 2));
        break;
    };
    return [humanYears,catYears,dogYears];
  }