/*
Training JS #10: loop statement --for
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

P.R.E.P.
parameter(s): an array of numbers
return: an array of numbers
examples:
input => output
([1,2]) => [[1],[2]]
([1,2,3]) => [[1,3],[2]]
([3,2,1]) => [[3,1],[2]]
([10,20,30]) => [[],[10,20,30]]
([11,21,31]) => [[11,21,31],[]]
([8,1,5,4,6,1,1]) => [[1,5,1,1],[8,4,6]]
pseudocode:
declare function
set parameter(s)
create for loop
if arr[i] % 2 then push element to odd array
else push it to even array
return [odd,even]
*/

function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2){
          odd.push(arr[i])
        }else{
          even.push(arr[i])
        }
      }
    return [odd,even];
  }