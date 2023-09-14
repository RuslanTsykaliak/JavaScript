// Ojects

// 1) What are objects?

// key:value store. The key is the left of the colon, the value is the rigth

// Each key:value pair is separated be comma

// Represented by {} - e.g. {someKey: 'someValue', anotherKey: 'anotherValue'}

// Keys must be strings

// but the value can be anything (array, functions, objects, strings, etc)

const someObject = {};
console.log(typeof someObject);

// 2) How do you create an object?
// - Using new Object.
const myObject = new Object({ myName: 'Ruslan' });
console.log({ myObject });
console.log(typeof myObject);

// - Using curly braces (standard) - Called an "object literal".
const someObject2 = {};

console.log({ someObject2 });
console.log(typeof someObject2);

// - Using Object.create().
// - Must pass an initial object that will be the "prototype object".
const myObject2 = Object.create({ bestProgrammist: 'Ruslan Tsykaliak' });
console.log({ myObject2 });
console.log(myObject2.bestProgrammist);

// How to access an object?
// - Using dot notation.
const myObject3 = { bestProgrammist: 'Ruslan Tsykaliak', myName: 'Ruslan' };
console.log(myObject3.bestProgrammist);
console.log(myObject3.myName);
console.log(myObject3.undefinedValue);

// - Using bracket notation, especially useful for using variables as keys.
const someVariable = 'bestProgrammist';
const myObject4 = { bestProgrammist: 'Ruslan Tsykaliak', myName: 'Ruslan' };
console.log(myObject4['bestProgrammist']);
console.log(myObject4['myName']);
console.log(myObject4[someVariable]);

// 4) How to add and remove values from an object.
const someObject3 = { defaultValue: 'default' };
someObject3.bestProgrammist = 'Ruslan Tsykaliak';
someObject3.name = 'Ruslan';
delete someObject3.bestProgrammist;
console.log({ someObject3 });

// 5) What if you add the same key twice to an object?
const myObject5 = { name: 'Ruslan' };
myObject5.bestProgrammist = 'Tsykaliak Ruslan';
myObject5.bestProgrammist = 'Ruslan Tsykaliak';
console.log({ myObject5 });

// 6) What if you want to use a variable as a key?
const myName = 'Ruslan';
const myObject6 = {};
myObject6[myName] = 'that is my name';
console.log(myObject6.myName);

// 7) What if I wanted to set the variable as the key and the value of the variable as the value?
// - This is called object shorthand.
const Ruslan = 'Ruslan';
const bestProgrammist = 'Ruslan Tsykaliak';
const myObject7 = { [Ruslan]: Ruslan };
const myObject8 = { Ruslan, bestProgrammist };
console.log({ myObject7, myObject8 });

// 8) Objects are passed by reference.
const objectOne = { bestProgrammist: 'Ruslan Tsykaliak' };
const objectTwo = objectOne;
objectTwo.bestProgrammist = 'Roman Tsykaliak';
console.log({ objectOne, objectTwo });

// Iterating over objects, object functions, built-in
