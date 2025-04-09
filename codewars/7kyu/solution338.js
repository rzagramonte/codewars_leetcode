/*
Driving License         

Task
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number, in all UPPERCASE.

Will the argument passed into the function always be a string?
Will the return always be a string?

data = ["John","James","Smith","01-Jan-2000","M"];
console.log(driver(data), "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'");
data = ["Johanna","","Gibbs","13-Dec-1981","F"];
console.log(driver(data), "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'");
data = ["Andrew","Robert","Lee","02-September-1981","M"];
console.log(driver(data), "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")

TODO:
create variables to values of each part of the output string
add them all up
return all as uppercase
*/

const driver = data => {
  
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const i = months.indexOf(data[3].slice(3,6));
    
    const _0 = data[2].length >= 5 ? data[2].slice(0,5) : data[2].padEnd(5,'9');
    const _1 = data[3][9];
    const _2 = data[4] == 'M' ? `${i + 1}`.padStart(2,'0') : `${i + 1 + 50}`;
    const _3 = data[3].slice(0,2);
    const _4 = data[3].slice(-1);
    const _5 = data[0][0] + `${data[1] ? data[1][0] : '9'}`;
    
    return (_0 + _1 + _2 + _3 + _4 + _5 + "9AA").toUpperCase();
  };