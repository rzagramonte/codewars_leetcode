/*
Area of a Square
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

Will the parameter always be a number?
Will the return always be a number rounded to two decimal points?
console.log(squareArea(2), 1.62, 1e-2)
console.log(squareArea(0), 0, 1e-2)
console.log(squareArea(14.05), 80, 1e-2)
*/

//declare function and set parameter
function squareArea(A){
    //declare variable circumference and assign it to A times 4
    let circumference = A * 4
    //declare variable radius and assign it to circumference divided by two times pi
    let radius = circumference / (2 * Math.PI);
    //declare variable area and assign it to radius squared using Math.pow() method
    let area = Math.pow(radius,2);
    //return area affixed to toFixed with 2 passed in as an argument and ecapsulate it in the Number command
    return Number(area.toFixed(2));
  }

  //condensed
  function squareArea(A){
    //return a number using Number prompt of radius squared using Math.pow and round it to two decimal points using toFixed
    return Number(Math.pow(((A * 4) / (2 * Math.PI)),2).toFixed(2));
   }