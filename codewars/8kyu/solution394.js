/*
Grasshopper - Create the rooms

Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

Will the variable contain an object of 3 objects?
Will each room contain at least 3 properties?

const keys = Object.keys(rooms)
console.log(keys.length >= 3, true);

keys.forEach(name => {
  Test.expect(typeof(rooms[name]) === 'object', `${name} should be an object`)
})

keys.forEach(name => {
  let numKeys = Object.keys(rooms[name]).length
  Test.expect(numKeys >= 3, `not enough properties for room: ${name}`)
})
*/

const rooms = {
    room1: { 
      name:"peach", 
      description:"soft, juicy fruit with a fuzzy, velvety skin that can range from yellow to reddish-orange in color", 
      completed: true 
    },
    room2: { 
      name:"apple", 
      description:"round fruit with crisp flesh and a thin skin that can range in color from green to red to yellow", 
      completed: true 
    },
    room3: { 
      name:"strawberry", 
      description:"bright red, heart-shaped fruits with small seeds on their surface and a green leafy cap", 
      completed: false 
    }
};