/*
Training JS #12: loop statement --for..in and for..of

Task
The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata.

Will the parameter always be a plain object?
Will the plain object have at least one key-value pair?
Will the return always be an array?

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
console.log(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
*/

//declare const variable and assign it to an arrow function
const giveMeFive = obj => {
    //declare variable and assign it to an empty array
    let arr = [];
    //create for..in loop
    for(let key in obj){
        //if length of key is equal to 5 or if length of value is equal to 5
        if(key.length == 5 || obj[key].length == 5){
            //if the length of the key is equal to 5, then push to array
            if (key.length == 5){
                arr.push(key);
            };
            //if the length of the value is equal to 5, then push to array
            if(obj[key].length == 5){
                arr.push(obj[key]);
            };
        };
    };
    //return array
    return arr;
};



