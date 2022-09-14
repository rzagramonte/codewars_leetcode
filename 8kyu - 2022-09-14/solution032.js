/*
Name on billboard
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

P.R.E.P.
parameters:
name
price = 30 unless otherwise stated
return:
a number
examples:
input => output
Sydney Cooper-Smith, 78 => 1482
Arnold Dane => 330
Jennifer Kane, 15 => 195
pseudocode:
declare a anon arrow function
set parameters name and price = 30
set variable finalCost to 0
set variable nameSplit to name and append the split method
iterate over the array nameSplit
for each character, add the variable price and reassign the variable finalCost to the new value
return finalCost
*/

const billboard = (name, price = 30) => {
    let finalCost = 0;
    let nameSplit =  name.split('');
    nameSplit.forEach(char =>{
        finalCost += price;
    });
    return finalCost;
};
