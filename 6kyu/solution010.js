/*
Data Reverse

A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/

/*
Will the argument passed into the function's parameter always be an array of natural numbers?
Will the return always be an array of natural numbers ordered differently from the input array?

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]), [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]), [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]);
make x amount of arrays that the elements divided by 8 can make
put them into their separate arrays contained in 1 array
reverse the one array
flatten the inner arrays
return the new array
*/
const dataReverse = data => require('lodash').chunk(data,8).reverse().flat();


