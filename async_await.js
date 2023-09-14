// An async function is declared using the 'async' keyword.
// It enables you to write asynchronous JavaScript in a cleaner way, avoiding "callback hell."

// Create an async function using the 'async' keyword.
async function getData() {
    // Statements
}

// Async functions can take various arguments like normal functions but always return a promise.

// Example: Async function that returns a resolved promise with the value 1.
async function asyncFn() {
    return 1;
}

// Equivalent function that returns a resolved promise with the value 1.
function fn() {
    return Promise.resolve(1);
}

// You can handle the return value with .then() or .catch().
console.log(asyncFn()); // Promise {<fulfilled>: 1}
console.log(fn());      // Promise {<fulfilled>: 1}

asyncFn().then((v) => console.log(v)); // Logs 1

// Async functions can contain zero or more 'await' keywords that will wait for a promise to resolve or reject.

// Example: An async function with 'await' that waits for a promise to resolve after a delay.
async function asyncExample() {
    const data = new Promise((resolve) =>
        setTimeout(() => resolve('1'), 3000)
    );
    // 'await' pauses the function until the promise is resolved.
    const result = await data;
    console.log(result);
}

asyncExample(); // Logs '1' after a delay
console.log('sync'); // Logs 'sync'

// You can use try/catch/finally to handle async promises.

async function handle() {
    try {
        const data = await new Promise((resolve, reject) =>
            setTimeout(() => resolve('4'), 4000)
        );
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        console.log('Finally block executed.');
    }
}

handle(); // Logs '4' (after a delay), then 'Finally block executed.'
