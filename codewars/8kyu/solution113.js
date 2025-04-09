/*
Type of sum

Return the type of the sum of the two arguments

P.R.E.P.
parameter(s): two values of any primitive data type
return: a string indicating type of the sum of a and b
examples:
input => output
(12, 1) => 'number'
('d', 1) => 'string'
(1, 'a') => 'string'
('dd', '') => 'string'
(true, 1) => 'number'
('s', false) => 'string'
(null, 1) => 'number'
('s', null) => 'string'
(null, undefined) => 'number'
(undefined, 're') => 'string'
(undefined, true) => 'number'
(null, false) => 'number'
pseudocode:
declare function
set parameters
return typeof (a + b)
*/

function typeOfSum(a, b) {
    // good luck
    return typeof (a + b);
  }