/*
2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.

Will the arguments passed into the functions' parameters be of any data type?
Will the return either be true or a new Error thrown of "Equal" or "Not Equal"?
*/

/**
 * @param {string} val
 * @return {Object}
 */

//return object
//in toBe() return true if both arguments are equal in value and type
//else throw an errow of "Not Equal"
//in notToBe() return true if both arguments are not equal in value and type
//else throw an errow of "Equal"
var expect = function(val) {
    return {
        toBe(v){
            if(v===val) return true;
            else throw new Error("Not Equal");
        },
        notToBe(v){
            if(v!==val) return true;
            else throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */