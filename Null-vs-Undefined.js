// Null VS Undefined In JavaScript

// Both are used for a "none value"

// Null is for an intentional "none value"
// JavaScript will not just give a value null which is why programmers use null to explicitly say something should be a none value

// Undefined is for a value that doesn't exist

// For example, if you want to initialize a variable to nothing, use null

const nothingYet = null
console.log(nothingYet)

// But if you try to access a property on an object that doesn't exist,  you'll get undefined

const myObject = {}
console.log(myObject.someProperty)

// Also, if you initialize a variable wihout assigning it to a value it will be undefined

let someVariable
console.log(someVariable)

// Null doesn't strictly equal to undefined

console.log(null === undefined)

// but Null does loosely equal to undefined

console.log(null == undefined)

// Both null and undefined are strictly equal to themeseves

console.log(null === null)
console.log(undefined === undefined)
