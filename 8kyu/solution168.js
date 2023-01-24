/*
Blood-Alcohol Content
Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!

He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

BAC calculator Formula:

BAC% = (A × 5.14 / W × r) - .015 × H 

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours
Source:

http://www.endmemo.com/medical/bac.php

Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

The gender will be passed as a string, either "male" or "female".

Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.

Using these parameters, create the function that will calculate Bob's and other partier's BAC.

Will the parameters always be an object with two numbers, 2 numbers, and a string?
Will the return always be a number with up to 4 decimal places?

console.log(bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1), 0.0837);
console.log(bloodAlcoholContent({ounces:180, abv:0.05}, 160,'female', 1), 0.1758);
console.log(bloodAlcoholContent({ounces:50, abv:0.14}, 250,'male', 3), 0.0601);
console.log(bloodAlcoholContent({ounces:20, abv:0.4}, 100,'female', 2), 0.2414);
*/

//declare function and set parameters
function bloodAlcoholContent(drinks, weight, sex, time){
    //declare variable r and set it to if sex is equal to value of female then return 0.66 else return 0.73
    let r = sex == 'female' ? 0.66 : 0.73;
    //declare A and assign it to drinks.ounces times drinks.abv to get the total alcohol consumed
    let A = drinks.ounces * drinks.abv;
    //declare bac and assign it to the bac formula
    let bac = (A * 5.14 / weight * r) - .015 * time;
    //return bac using parseFloat and .toFixed(4) to make sure the number returned will only be upt to 4 decimal places
    return parseFloat(bac.toFixed(4));
  }