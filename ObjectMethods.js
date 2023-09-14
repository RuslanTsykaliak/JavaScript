// JavaScript Object keys, values, entries methods

// Why are these useful?

const nameAndAge = {
    'John': 30,
    'Jane': 25,
    'Mary': 18,
    'Peter': 35,
    'Ruslan': 26,
    'Alexandera': 29,
}

// Objects are not iterable
for (const key in nameAndAge) {
    console.log(key);
}

// 1) Object.keys()
// - Takes 1 argument, an object.
// - Returns an array of keys contained in the object you pass into Object.keys().

const nameAndAge2 = {
    'Ruslan': 26,
    'Alexandera': 29,
    'John': 30,
    'Jane': 25,
    'Mary': 18,
    'Peter': 35,
}

const names = Object.keys(nameAndAge2);

console.log(names);

// Iterating over the returned keys directly
for (const key of Object.keys(nameAndAge2)) {
    console.log(key);
}

// 2) Object.values()
// - Takes 1 argument, an object.
// - Returns an array of values contained in the object you pass into Object.values().

const nameAndAge3 = {
    'Ruslan': 26,
    'Alexandera': 29,
    'John': 30,
    'Jane': 25,
    'Mary': 18,
    'Peter': 35,
}

const values = Object.values(nameAndAge3);

console.log(values);

// Iterating over the returned values directly
for (const value of Object.values(nameAndAge3)) {
    console.log(value);
}

// 3) Object.entries()
// - Takes 1 argument, an object.
// - Returns an array of arrays containing [key, value] pairs
//   contained in the object you pass into Object.entries().

const nameAndAge4 = {
    'Ruslan': 26,
    'Alexandera': 29,
    'John': 30,
    'Jane': 25,
    'Mary': 18,
    'Peter': 35,
}

const entries = Object.entries(nameAndAge4);

console.log(entries);

// More advanced use using destructuring
for (const [key, value] of Object.entries(nameAndAge4)) {
    console.log(key, value);
}
