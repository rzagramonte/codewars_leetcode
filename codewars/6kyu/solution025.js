/*
The most common letter

Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

/*
two strings => both strings consist of letters
one string
no funny biz

console.log(replaceCommon('my mom loves me as never did', 't'), 'ty tot loves te as never did');
console.log(replaceCommon('real talk bro', 'n'), 'neal talk bno');
console.log(replaceCommon('great job go ahead', 'k'), 'grekt job go khekd');

TODO:
count letters
replace most common letter with letter
return resulting string
*/

const replaceCommon = (string, letter) => {
    const dict = {};
    const stringNoSpace = string.replaceAll(' ', '')
    for(const char of stringNoSpace){
      if(typeof dict[char] == 'number') dict[char] += 1
      else dict[char] = 0;
    };
    const max = Math.max(...Object.values(dict));
    const maxLetter = [...stringNoSpace].find(let=>dict[let] == max);
    return string.replaceAll(maxLetter,letter)
  };
  