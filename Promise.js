// A Promise is a placeholder for a future value, allowing you to perform asynchronous tasks

// For example, network requests take time, and without promises, they would block your program

// Promises have 3 states: fulfilled, rejected, and pending

// How to create a Promise
// Some functions automatically return a promise (e.g., fetch(), async functions)
// You can manually create a promise using the Promise constructor function

const p = new Promise((resolve, reject) => {
    const count = 5
    if (count < 10) {
        resolve('Resolved') // Resolve the promise if the condition is met
    } else {
        reject('Rejected') // Reject the promise if the condition is not met
    }
})

// When the future value arrives, you handle it with .then(), .catch(), and .finally()

p.then(() => {
    console.log(p)
    console.log('Fulfilled!')
}).catch(() => {
    console.log(p)
    console.log('Rejected!')
}).finally(() => {
    console.log(p)
    console.log('Finally')
})

// You can also resolve and reject promises with a value
