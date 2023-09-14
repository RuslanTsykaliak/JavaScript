// setTimeout() is a global method that runs a function after a specific amount of time.
// It returns an ID that allows you to clear the timeout if needed using the global clearTimeout() method.
// setTimeout() only runs the function once. Use setInterval() for running a function multiple times on a certain interval.

// Example: Basic usage of setTimeout
function greeting() {
    console.log('Hello')
}

// setTimeout takes two arguments: a function and a time in milliseconds (ms)
setTimeout(greeting, 2000) // Calls greeting function after 2000 ms (2 seconds)

// Example: Passing arguments to the callback function
function greeting(name) {
    console.log(`Hello ${name}`)
}

setTimeout(() => greeting('Ruslan'), 2000) // Calls greeting('Ruslan') after 2000 ms (2 seconds)

// Example: Clearing timeouts
const id = setTimeout(() => greeting('Ruslan'), 2000) // Calls greeting('Ruslan') after 2000 ms (2 seconds)

// Clear the timeout using the clearTimeout method and providing the ID
clearTimeout(id)

// Common interview question to understand asynchronous behavior
console.log('one') // Logs 'one'

setTimeout(() => console.log('two'), 0) // Schedules the logging of 'two' after the current execution context is clear

console.log('three') // Logs 'three'
