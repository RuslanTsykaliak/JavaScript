// 1) What is the array?

// A collection of indexable, ordered, comma separated items, of any data type.

// The indexes are automatically created for you.

// In other words, a list of values.

// The first value is at index 0.

// Useful when you have a colleciton of related items.


// 2) How to create an array?

// const myArray = [1, 2, 3]
//const myArray = new Array(3).fill(true)
// const  myArray = Array.from('hello') // Common when working with DOM elements

// console.log({myArray})

// 3) Howe to access the values in an arra?

const exampleArray = ['first', 2, 3, 4, 'last']

const first = exampleArray[0]
const last = exampleArray[exampleArray.length - 1]
const three = exampleArray[2]

console.log({first, last, three})

// 4) What are some algorithmic complexity considerations for arrays?

// Inser/delete from the end of an array is very fast. Inser and delete any where else is lenear 
// Getting an index is very fast 
// Setting an index is very fast 
// Creating an array is linear 
// Searching an unsorted array is linear 

// 5) Array are objects

console.log(typeof [1,2,3])
console.log(Array.isArray([])) // {} false

// You can add values to an array similar to objects
const myArray = []

myArray.bestDeveloper = 'Ruslan Tsykaliak'

console.log(myArray.bestDeveloper)

// JavaScript won't add . properties to the length of an array
console.log(myArray.length)

myArray[0] = 'first value'

console.log(myArray.lenght)

// So, what makes an object different than an array? Most the built in methods. (.length, .push, .pop, .filte, .map,  etc.)
