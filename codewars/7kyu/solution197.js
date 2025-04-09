/*
Colored Hexes!

You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

We need a way to tell which is red, and which is blue!

That's where you create hex color !!!

It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

But, if multiple colors are of equal concentration, you should return their mix!

red + blue = magenta

green + red = yellow

blue + green = cyan

red + blue + green = white
One last thing, if the string given is empty, or has all 0's, return black!

Examples:

codes = "087 255 054" -> "green"
codes = "181 181 170" -> "yellow"
codes = "000 000 000" -> "black"
codes = "001 001 001" -> "white"

Will the argument passed into the function's parameter always be a string?
Will the return always be a string?

console.log(hexColor(''), 'black');
console.log(hexColor('000 000 000'), 'black');
console.log(hexColor('121 245 255'), 'blue');
console.log(hexColor('027 100 100'), 'cyan');
console.log(hexColor('021 021 021'), 'white');
console.log(hexColor('255 000 000'), 'red');
console.log(hexColor('000 147 000'), 'green');
console.log(hexColor('212 103 212'), 'magenta');
console.log(hexColor('101 101 092'), 'yellow');
*/

//a lot of branching/decision making
const hexColor = codes => {
  if(!codes) return 'black';
  codes = codes.split(' ');
  if(codes.every(c=>c=='000' || c=='0')) return 'black';
  else if(codes[0] == codes[1] && codes[0] == codes[2]) return 'white';
  else if(Math.max(...codes) == codes[0] && codes[0] == codes[1]) return 'yellow';
  else if(Math.max(...codes) == codes[2] && codes[0] == codes[2]) return 'magenta';
  else if(Math.max(...codes) == codes[1] && codes[1] == codes[2]) return 'cyan';
  else if(Math.max(...codes) == codes[0]) return 'red';
  else if(Math.max(...codes) == codes[1]) return 'green';
  else if(Math.max(...codes) == codes[2]) return 'blue';
};