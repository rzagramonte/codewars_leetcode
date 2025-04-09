/*
Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Will the parameter always be an array?
Will the elements of the input array always be strings?
Will the strings always be either "n", "s", "w", "e"?
Will the return always be a boolean of true or false?

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'], true);
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'], false);
console.log(isValidWalk(['w'], false);
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'], false);
*/

//if length of walk is less or greater than 10, return false
//create empty arrays for each direction
//push the direction to the appropriate array
// return true if length of n is equal in value to length of s AND length of w is equal in value to length of e, else return false

const isValidWalk = walk => {
    //insert brilliant code here
    if (walk.length > 10 || walk.length < 10) return false;
    let n = [];
    let s = [];
    let w = [];
    let e = [];
    for(let dir of walk){
      switch (dir) {
      case 'n':
          n.push(dir);
          break;
      case 's':
          s.push(dir);
          break;
      case 'w':
          w.push(dir);
          break;
      case 'e':
          e.push(dir);
          break;
      };
    };
    return n.length == s.length && w.length == e.length;
  };