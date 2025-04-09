/*
Apparently-Modifying Strings

For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s). If input does not contain 'and' or 'but', return the same string. If a blank string, return ''. If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates). An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(apparently('It was great and I have never been on live television before but sometimes I dont watch this.'), 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.');
console.log(apparently('and'), 'and apparently');
console.log(apparently('apparently'), 'apparently');
console.log(apparently('but apparently'), 'but apparently');

TODO:
replace but and and with apparently after unless apparently is already after
*/

const apparently = str =>str.replace(/(and apparently\b)|(but apparently\b)|(and\b)|(but\b)/g,e=>(e=='and'||e=='but')?`${e} apparently`:e);