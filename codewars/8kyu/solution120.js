/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.

P.R.E.P.
parameter(s): a number
return: a number
example:
input => output
(1) => 100
(4) => 400
(5) => 475
(9) => 855
(10) => 900
(100) => 9000
pseudocode:
declare function
set parameter(s)
return n * 100 if n < 5
else if n >= 5 && n < 10 return n * 95
else return n * 90
*/

function saleHotdogs(n){
    return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
  }