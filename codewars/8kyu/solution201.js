/*
How old will I be in 2099?

Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

Good Luck!

Will the parameters always be two numbers?
Will the return always be a string?

console.log(calculateAge(2012, 2016),"You are 4 years old.");
console.log(calculateAge(1989, 2016),"You are 27 years old.");
console.log(calculateAge(2000, 2090),"You are 90 years old.");
console.log(calculateAge(2000, 1990),"You will be born in 10 years.");
console.log(calculateAge(3400, 3400),"You were born this very year!");
console.log(calculateAge(900, 2900),"You are 2000 years old.");
console.log(calculateAge(2010, 1990),"You will be born in 20 years.");
console.log(calculateAge(2010, 1500),"You will be born in 510 years.");
console.log(calculateAge(2011, 2012),"You are 1 year old.");
console.log(calculateAge(2000, 1999),"You will be born in 1 year.");
*/

//declare function and set parameters
function  calculateAge(born,currentYear) {
    //if currentYear is greater than born and currentYear minus born is equal to in value and type to 1
    if(currentYear>born && currentYear - born === 1){
        //return string using template literal and interpolating currentYear - born with the word year
      return `You are ${currentYear - born} year old.`;
      //if currentYear is greater than born and currentYear minus born is not equal to in value and type to 1
    }else if(currentYear>born && currentYear - born !== 1){
        //return string using template literal and interpolating currentYear - born with the word years
      return `You are ${currentYear - born} years old.`;
      //if born is greater than currentYear and born minus currentYear is equal to in value and type to 1
    }else if(born>currentYear && born - currentYear === 1){
         //return string using template literal and interpolating born - currentYear with the word year
        return `You will be born in ${born-currentYear} year.`;
        //if born is greater than currentYear and born minus currentYear is not equal to in value and type to 1
    }else if(born>currentYear && born - currentYear !== 1){
          //return string using template literal and interpolating born - currentYear with the word year
      return `You will be born in ${born-currentYear} years.`;
      //if born is equal in value and type to currentYear
    }else if(born === currentYear){
        //return string
      return 'You were born this very year!'
    };
  }