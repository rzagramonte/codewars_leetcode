/*
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

..........
..........
..........
.......X..
..........
..........
The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this example:

findSpaceship(map) => [7, 2]
If you cannot find the spaceship, the result should be

"Spaceship lost forever."

const assert = require('chai').assert

describe('findSpaceship', function() {
  it('fixed tests', function() {
    assert.deepEqual(findSpaceship('..........\n..........\n.......X..\n..........\n..........'), [7, 2])
    assert.deepEqual(findSpaceship('.......\nX.......'), [0, 0])
    assert.deepEqual(findSpaceship('........................'), 'Spaceship lost forever.')
    assert.deepEqual(findSpaceship(), 'Spaceship lost forever.')
    assert.deepEqual(findSpaceship('X'), [0, 0])
  })
})
*/

function findSpaceship(map) {
  if (!map) return "Spaceship lost forever.";
  let arr = map.split("\n").reverse();
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].indexOf("X");
    if (index !== -1) return [index, i];
  }
  return "Spaceship lost forever.";
}