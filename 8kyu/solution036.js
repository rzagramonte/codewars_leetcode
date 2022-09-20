/*
Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
P.R.E.P.
parameters: weight and height both numbers
return: a string
examples:
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
pseudocode:
declare function
set parameters
set bmi = weight / (height **2)
create if else statement for each condition and return statement
*/

function bmi(weight, height) {
    let bmi = weight / (height **2)
    if (bmi <= 18.5){
      return "Underweight";
    }else if(bmi <= 25.0){
      return "Normal";
    }else if(bmi <= 30.0){
      return "Overweight";
    }else{
      return "Obese";
  };
  };