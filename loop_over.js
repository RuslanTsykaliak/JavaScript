// How to loop over an object in JavaScript?

const object = {
    propOne: 'one',
    propTwo: 'two',
    propThree: 'three',
    propFour: 'four'
}

// Error - You can't use for...of directly on an object
// Use for...in for keys
for (const key in object) {
    console.log(key);
}

// You can also use for...in to iterate over values by accessing the object's properties
for (const key in object) {
    const value = object[key];
    console.log(key);
    console.log(value);
}

// Object.keys() to iterate over keys
for (const key of Object.keys(object)) {
    console.log(key);
}

// Object.values() to iterate over values
for (const value of Object.values(object)) {
    console.log(value);
}

// Object.entries() to iterate over key-value pairs
for (const [key, value] of Object.entries(object)) {
    console.log(key);
    console.log(value);
}

// You can also use array methods like map to get an array of values
const values = Object.values(object).map((value) => {
    console.log(value);
    return value;
});
console.log(values);
