// JavaScript Template Strings

// 1) What is a "Template String" AKA Template Literal?

// A template string is a term for creating a string with placeholders
// And then you can inject a JavaScript expression into that placeholder

// You basically create a string "template" and then make that template more dynamic with JavaScript

// 2) How do template strings work?

// Example using string concatenation
const best = "Best Programmer"

const myName = "Ruslan"

const greeting = "Hi, my name is " + myName + " and I am " + best

console.log(greeting)

// Example using template literal
// Any JavaScript expression can go within the curly brackets b/w curly braces is JS land
const greeting2 = `Hi, my name is ${myName + ' Tsykaliak'} and I am ${best}`

console.log(greeting2)

// Another example
const greetingObject = {name: 'Ruslan', best: 'Best Programmer' }

// Multiline strings are fine with back tics, and it maintains the multi0line formatting

const greeting3 = `Hi, my name is ${greetingObject.name} and I am ${greetingObject.best}`

console.log(greeting3)

// Useful if needing to use double and single quotes

const greeting4 = `Hi, my name's "Ruslan" and I am "Best Programmer"`

console.log(greeting4)