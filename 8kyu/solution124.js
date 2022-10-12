/*
Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

an array
will only have elements in the form of a string 'good' or 'bad'
the array will always have elements
no other data types will be passed in
no caps

always return a string: 'Publish!' || 'I smell a series!' || 'Fail!'

input => output
console.log(well(['bad','bad','bad']),'Fail!')
console.log(well(['good','bad','bad','bad','bad']), 'Publish!')
console.log(well(['good','bad','bad','bad','bad','good','bad','bad','good']), 'I smell a series!')
*/

function well(x){
    //declare a variable, goodStr and assign it to and empty array
    let goodStr = [];
    //create a for loop to iterate over the array
    for(let i = 0; i < x.length; i++){
       if(x[i] === 'good'){
        //if x[i] === 'good' push this into goodStr
        goodStr.push(x[i]);
       };
    }
    //if else statement
    //if goodStr.length >= 1 && goodStr.length <= 2 then return 'Publish'
    if(goodStr.length == 1 || goodStr.length == 2){
        return 'Publish!';
    }else if(goodStr.length > 2){//if goodStr.length > 2 then return 'I smell a series'
        return 'I smell a series!';
    }else if(goodStr.length == 0){//if goodStr.length === 0 then return 'Fail!'
        return 'Fail!'
    }
}