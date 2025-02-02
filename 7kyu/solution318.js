/*
A Promise is a Promise

Create a resolved javascript Promise that will return 'Hello World!'.

describe('Basic Test', () => {
  it('Hello World!', () => {
    promiseHelloWorld().then(response => Test.assertEquals(response, 'Hello World!', 'Simple Single call test'));
  });
});
*/

const promiseHelloWorld = () => Promise.resolve("Hello World!");