/*
Check the exam

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

 Will the arguments passed into the function always be two arrays of strings?
 Will the return always be a number?

 console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
 console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
 console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
 console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);

 TODO:
iterate over first array
if elements in each array at the same index are equal in value, return 4
if element in the second array at the current index is an empty string, return 0
else return -1
reduce array to one number
if num is less than 0 return 0 else return num
*/

const checkExam = (a1, a2) => {
    const num = a1.map((e,i) => e == a2[i] ? 4 : a2[i] == "" ?  0 : -1).reduce((a,c)=>a+c,0);
    return (num > 0 && num) || 0;
  };
  