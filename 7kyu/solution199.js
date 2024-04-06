/*
Resistor Color Codes

Resistors are electrical components marked with colorful stripes/bands to indicate both their resistance value in ohms and how tight a tolerance that value has. While you could always get a tattoo like Jimmie Rodgers to help you remember the resistor color codes, in the meantime, you can write a function that will take a string containing a resistor's band colors and return a string identifying the resistor's ohms and tolerance values.

The resistor color codes
You can see this Wikipedia page for a colorful chart, but the basic resistor color codes are:

black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9

Each resistor will have at least three bands, with the first and second bands indicating the first two digits of the ohms value, and the third indicating the power of ten to multiply them by, for example a resistor with the three bands "yellow violet black" would be 47 * 10^0 ohms, or 47 ohms.

Most resistors will also have a fourth band that is either gold or silver, with gold indicating plus or minus 5% tolerance, and silver indicating 10% tolerance. Resistors that do not have a fourth band are rated at 20% tolerance. (There are also more specialized resistors which can have more bands and additional meanings for some of the colors, but this kata will not cover them.)

Your mission
The way the ohms value needs to be formatted in the string you return depends on the magnitude of the value:

For resistors less than 1000 ohms, return a string containing the number of ohms, a space, the word "ohms" followed by a comma and a space, the tolerance value (5, 10, or 20), and a percent sign. For example, for the "yellow violet black" resistor mentioned above, you would return "47 ohms, 20%".

For resistors greater than or equal to 1000 ohms, but less than 1000000 ohms, you will use the same format as above, except that the ohms value will be divided by 1000 and have a lower-case "k" after it. For example, for a resistor with bands of "yellow violet red gold", you would return "4.7k ohms, 5%"

For resistors of 1000000 ohms or greater, you will divide the ohms value by 1000000 and have an upper-case "M" after it. For example, for a resistor with bands of "brown black green silver", you would return "1M ohms, 10%"

Test case resistor values will all be between 10 ohms and 990M ohms.

Will the argument passed into the function's parameter always be a string?
Will the return always be a string?

console.log(decodeResistorColors("yellow violet black"), "47 ohms, 20%");
console.log(decodeResistorColors("yellow violet red gold"), "4.7k ohms, 5%");
console.log(decodeResistorColors("brown black green silver"), "1M ohms, 10%");
*/

//pluck out the last color in the string
//switch the first three elements with the number that corresponds to its color
//return resistor value with correct unit of measurement and tolerance percent
const decodeResistorColors = bands => {
    const b4 = bands.split(' ')[3];
    bands = bands.split(' ').map(b => {
      switch (b) {
      case 'black': return 0;
      case 'brown': return 1;
      case 'red': return 2;
      case 'orange': return 3;
      case 'yellow': return 4;
      case 'green': return 5;
      case 'blue': return 6;
      case 'violet': return 7;
      case 'gray': return 8;
      default: return 9;
      };
    });
    const b1 = bands[0];
    const b2 = bands[1];
    const b3 = bands[2];
    const r = `${b1}${b2}` * 10 ** b3;
    return `${r < 1000 ? `${r} ` : r < 1000000 ? `${r/1000}k ` : `${r/1000000}M `}ohms`+`, ${b4 == 'gold' ? '5%' : b4 == 'silver' ? '10%' : '20%'}`;
  };