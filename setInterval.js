// setInterval() is a global method that calls a function at specified intervals (ms).
// It continues to call the function at the specified interval until clearInterval is called or until the window is closed.

// Example: Basic usage of setInterval
setInterval(myCallback, 500) // Calls myCallback function every 500 milliseconds

function myCallback() {
    console.log('Running interval')
}

// Example: Clearing Intervals
const intervalID = setInterval(myCallback, 500) // Calls myCallback function every 500 milliseconds

// Clear the interval after 2000 milliseconds (2 seconds)
setTimeout(() => clearInterval(intervalID), 2000)

// Example: Passing parameters to the callback function
const intervalID2 = setInterval(myCallback2, 400, 'Parameter 1', 'Parameter 2') // Calls myCallback2 function every 400 milliseconds with two parameters

function myCallback2(param1, param2) {
    console.log(param1)
    console.log(param2)
}

// Clear the interval after 2000 milliseconds (2 seconds)
setTimeout(() => clearInterval(intervalID2), 2000)
