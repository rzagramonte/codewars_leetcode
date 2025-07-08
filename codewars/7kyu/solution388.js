/*
Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')

TODO:
create new string
iterate over input string
if not octothorpe, add to new string
else return new string
return new string
*/

const removeUrlAnchor = url => {
  let res = '';
  for(const c of url){
    if(c != '#') res += c;
    else return res;
  }
  return res;
};