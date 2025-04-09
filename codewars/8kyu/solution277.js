/*
Fix the Bugs (Syntax)
In this Kata you should fix/create a program that returns the following values:

false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.

func myFirstKata(a b) {
  if {typeof(a) !! "number" or typeof(b) !! "number"} (
    false;
  ) else (
    a % b ++ b % a;
  )
}
*/

const myFirstKata = (a, b) => typeof a != "number" || typeof b != "number" ? false : a % b + b % a;