/*
Return a sorted list of objects

You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
The values will always be numbers, and the properties will always exist.

Will the argument passed into the function always be an array of objects?
Will the return always be an array of objects?

describe('Submission tests', () => {
  it('should sort the list correctly', () => {
    let sortBy = "b";
    let arr = [
          { a: 2, b: 2 },
          { a: 3, b: 40 },
          { a: 1, b: 12 }
        ];
    let expected = [
          { a: 3, b: 40 },
          { a: 1, b: 12 },
          { a: 2, b: 2 }
        ];
      assert.deepEqual(sortList(sortBy, arr), expected);
  });
});

TODO:
sort by descending order
sort by property in each object
*/

const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy]);
