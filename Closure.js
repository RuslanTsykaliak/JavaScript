// Closure

// A closure occurs when you return a function from another function, and the returned inner function remembers its lexical scope even when the outer function has completed execution.

function outerFunction() {
    let count = 0; // This variable is within the lexical scope of outerFunction.
    return function innerFunction() {
        console.log(count); // innerFunction has access to the 'count' variable even though outerFunction has finished executing.
        count++;
    };
}

const innerFunction = outerFunction(); // Calling outerFunction returns innerFunction, creating a closure.

innerFunction(); // Outputs 0, as it starts with the initial value of 'count'.
innerFunction(); // Outputs 1, 'count' is remembered between function calls.
innerFunction(); // Outputs 2, 'count' continues to increment.

const innerFunction2 = outerFunction(); // Creating a new instance of the closure with its own 'count' variable.

innerFunction2(); // Outputs 0, independent of the 'count' in the first closure.
innerFunction2(); // Outputs 1.
innerFunction2(); // Outputs 2.
