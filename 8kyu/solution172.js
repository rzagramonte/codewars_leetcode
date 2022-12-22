/*
Mr. Freeze
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

Will the parameter always be the object MrFreeze?
Will the return always be the object MrFreeze frozen?

console.log(Object.isFrozen(MrFreeze), true);
*/

// mark the MrFreeze object instance as frozen
//declare variable and assign it to Object.freeze() and pass in the object MrFreeze
const frozenMrFreeze = Object.freeze(MrFreeze);