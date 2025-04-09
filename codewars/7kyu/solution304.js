/*
Cats in hats

The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z. The Cat In The Hat is 2,000,000 cat units tall. Each cat is 2.5 times bigger than the cat underneath their hat. Find the total height of the cats if they are standing on top of one another. Counting starts from the Cat In The Hat

n = the number of cats
fix to 3 decimal places.

Will the argument passed into the function always be a number?
Will the return always be a string?

console.log(height(7), "3331148.800");
console.log(height(0), "2000000.000");

declare variable q to hold the quotient
declare variable h to hold the height
loop from 0 to n
if i is 0 (or falsy), divide 2000000 by 2.5 and assign it to q and add it to h
else divide q by 2.5 and reassign and add new q to h
return h fix to 3 decimals
*/

const height = n => {
    let q;
    let h = 2000000;
    
    for(let i = 0; i < n; i++){
      if(!i){
        q = 2000000 / 2.5;
        h += q;
      }else{
        q /= 2.5;
        h += q;
      };
    };
    
    return h.toFixed(3);
};
  