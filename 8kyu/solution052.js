/*
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
P.R.E.P.
parameters: string of digits
return: return the resulting string of any digit below 5 with '0' and any digit 5 and above with '1'
examples:
input => output
"762348" => "110001"
"7652810" => "1110100"
"435276089657" => "001011011111"
pseudocode:
declare a function named fakeBin
set parameter x
variable subX = x appended to the split method passing in the argument of ''
variable newArr = an empty array
variable mapOverSubX = using the map method to iterate over subX
if the element < 5 after being coerced into a number then push '0' into newArr
else if the element >= 5 after being coerced into a number then push '1' into newArr
return newArr appended to the join method passing in the argument of ''
*/

function fakeBin(x){
    let subX = x.split('');
    let newArr = [];
    let mapOverSubX = subX.map(element=>{
        if(Number(element) < 5){
        newArr.push('0')
        }else if(Number(element) >= 5){
        newArr.push('1');
        }
    });
    return newArr.join('');
}