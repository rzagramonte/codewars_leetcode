/*
Javascript Namespacing

Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.

Example:

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'
The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables. Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.

const { assert } = require('chai');

describe("A Namespaced Object", function () {
  it("should define a class, MyClass, in the namespace MyNamespace", function () {
    assert.strictEqual(typeof MyNamespace.MyClass, 'function');

    const myclass = new MyNamespace.MyClass();
    assert.strictEqual(typeof myclass, 'object');
  });
  it("should define a method in MyClass that returns 'hello'", function () {
    var obj = new MyNamespace.MyClass('hello');
    assert.strictEqual(obj.sayHello(), 'hello');
  });
});

*/

// MyNamespace is provided. Define MyClass ...

MyNamespace.MyClass = class{
  constructor(name){
    this.name = name;
  }
  sayHello(){
    return this.name;
  }
}