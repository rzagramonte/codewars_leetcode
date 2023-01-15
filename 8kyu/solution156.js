/*
L1: Bartender, drinks!

Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

Will the parameter always be a string?
Will the return always be a string?

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars");
console.log(getDrinkByProfession("rapper"), "Cristal");
console.log(getDrinkByProfession("pundit"), "Beer");
console.log(getDrinkByProfession("Pug"), "Beer");
*/

//declare function and set parameter
function getDrinkByProfession(param){
    //declare variable and assign it to param appended to toLowerCase() using dot notation
    let paramLowercase = param.toLowerCase();
    //use switch case using paramLowercase
    //apply all case values in lowercase
    //return the appropriate string
      switch (paramLowercase) {
          case "jabroni":
              return "Patron Tequila";
              break;
          case "school counselor":
              return "Anything with Alcohol";
              break;
          case "programmer":
              return "Hipster Craft Beer";
              break;
          case "bike gang member":
              return "Moonshine";
              break;
          case "politician":
              return "Your tax dollars";
              break;
          case "rapper":
              return "Cristal";
              break;
          default:
              return "Beer";
              break;
      }
  }