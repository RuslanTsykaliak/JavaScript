// Javascript Event Loop Explained

// The JavaScript runtime model is based on an event loop
// This allows JavaScript to collect and process events and execute sub-tasks and async code

// Before we dive right into the event loop, let's first understand how JavaScript code is executed

// There are two parts to JavaScript execution:

// 1. Going through line by line

// 2. Saving stuff to memory

// Defining a person's name
const person = 'Ruslan'

// Creating a function to generate a greeting
function greeting(nameToGreet) {
    return `Hello ${nameToGreet}!`
}

// Call stack keeps track of where you're at in the program
const hiRuslan = greeting(person) // Executing the greeting function
const hiJulia = greeting('Julia') // Executing the greeting function

console.log(hiRuslan) // Logging the greeting for Ruslan
console.log(hiJulia) // Logging the greeting for Julia

// The event loop allows for async code execution

// setTimeout is an asynchronous web browser function
setTimeout(() =>
    console.log(greeting(person)), 500) // Logging a greeting with a delay

const hiRoman = greeting('Roman') // Executing the greeting function

console.log(hiRoman) // Logging the greeting for Roman

// Main Event Loop Rule
// Doesn't run until all sync code is completed and the main call stack is empty
// This gives you certainty of when async code will be pushed back onto the main call stack

// Some async functions are fetch, setTimeout, setInterval

// NOTE: There are multiple queues, the microtask and task queue, where the event loop will prioritize tasks from one of the queues
