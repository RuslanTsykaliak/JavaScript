// What is an object property?

const object = {
    propertyOne: 'one',
    propertyTwo: 'two',
    propertyThree: 'three',
}

// There are two ways to access the properties

// 1. Dot notation
const one = object.propertyOne; // Accessing 'propertyOne' using dot notation
const two = object.propertyTwo; // Accessing 'propertyTwo' using dot notation

console.log({ one, two });

// 2. Square bracket notation
const oneSq = object['propertyOne']; // Accessing 'propertyOne' using square bracket notation
const twoSq = object['propertyTwo']; // Accessing 'propertyTwo' using square bracket notation

console.log({ oneSq, twoSq });

// You can also pass in any expression to square brackets
const x = object[false ? 'propertyOne' : 'propertyThree']; // Using an expression in square brackets
console.log({ x });

const someVariable = 'propertyTwo';
const y = object[someVariable]; // Using a variable to access a property
console.log({ y });
