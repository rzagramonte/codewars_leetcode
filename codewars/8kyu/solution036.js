/*
Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

Will the parameter always be two numbers?
Will the return always be a string?

console.log(bmi(80, 1.80), "Normal");
*/

//declare variable and assign to arrow function
//set parameters
const bmi = (weight, height) => {
  //declare variable and assign to weight divided by height squared
  let bmi = weight / (height**2);
  //if bmi is less than or equal to 18.5, return "Underweight"
  //else if bmi is less than or equal to 25.0, return "Normal"
  //else if bmi is less than or equal to 30.0, return "Overweight"
  //else return "Obese"
  return bmi <= 18.5 ? "Underweight" :
         bmi <= 25.0 ? "Normal" :
         bmi <= 30.0 ? "Overweight" : "Obese";
};