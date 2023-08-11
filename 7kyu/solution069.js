/*
The Office II - Boredom Score

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

Will the parameter always be an object?
Will the values of the input object always be strings?
Will the return always be a string?

console.log(boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }), 'kill me now');
console.log(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
console.log(boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }), 'party time!!');
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//declare variable staffValues and assign to an array containing the values of the input object
//declare variable boredomScore and assign to object of boredom assessment scores
//declare variable teamScore that maps over the array of staffValues and creates a new array where each element is the value of the element as the key in the object boredomScore then reduces the values to one number
//return the correct string depending on the expressions' validity 
const boredom = staff => {
    let staffValues = Object.values(staff);
    const boredomScore = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      "pissing about": 25
    };
    let teamScore = staffValues.map(dep=>boredomScore[dep]).reduce((a,c)=>a+c,0);
    return teamScore <= 80 ? 'kill me now' : teamScore < 100 && teamScore > 80 ? 'i can handle this' : 'party time!!';
  };