/*
Money, Money, Money

Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

Will the parameters always be 4 numbers?
Will the return always be either 0 or a number greater than 0?

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000,0.01625,0.18,1200), 14);
console.log(calculateYears(1000,0.05,0.18,1000), 0);
*/

//declare constant variable calculateYears which will be assigned to an arrow function
//set parameters principal, interest, tax, and desired
//declare variable Y and assign to 0
//create while loop that will execute while principal is less than desired
//the code in the while block before updating the final expression is tightly coupled - do not separate
//calculate the interest amount before taxes
//calculate the amount of tax on the interest amount
//calculate the final interest amount minus taxes
//add all of this to the principal and assign the variable with the new sum
//update Y by 1
//return: is the value of principal equal to the value of desired? if so, return 0, else return Y
const calculateYears = (principal, interest, tax, desired) => {
    let Y = 0;
    while(principal < desired){
      let interestAmountBeforeTaxes = principal * interest;
      let taxAmountOnInterest = interestAmountBeforeTaxes * tax;
      let finalInterest = interestAmountBeforeTaxes - taxAmountOnInterest;
      principal += finalInterest;
      Y++;
    };
    return principal == desired ? 0 : Y;
  }
  //this took mad long to figure out *facepalm*
    //return (Math.log(desired + (tax *  interest * (desired - principal))/principal))/(Math.log(1+interest))  
  /*
      let y = 0; // Initialize the time (in years)
  
    // Continue compounding interest and applying taxes until the desired amount is reached
    while (principal < desired) {
      // Calculate the interest earned before taxes
      let interestEarned = principal * interest;
      
      // Calculate the taxes on the interest earned
      let taxes = interestEarned * tax;
      
      // Update the principal after deducting taxes
      principal += interestEarned - taxes;
      
      // Increment the time
      y++;
    }
  */
  
    //let EOY = principal + eI
    //let abt = principal + ati
    //let interestAfterTax = interest + interestAmount - tax;
      // your code
    /*
    interestAmount = principal * interest
    taxesDeducted = interest * tax
    principal = taxesDeducted + interestAmount - tax
    investment return is next year's principal
    
    interest (interestAmount) = Principal * interest rate (interest)  
    tax Principal (taxesDeducted) = interest (interestAmount) * tax rate (tax) 
    investment return (principal) = tax Principal (taxesDeducted) + interest (interestAmount) - tax  
    investment return (principal) is next year's principal
    */