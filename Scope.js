// Scope prevents name collisions in your program and makes things easier to reason about, especially when working in large applications.

// There are three main types of scope in JavaScript:

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// Global Scope Example
console.log(Array.isArray([])); // Accessing a global variable

// Function Scope Example
function newScope() {
    console.log('function scope');
    // Block Scope (within the while loop)
    while (true) {
        console.log('block scope');
        break;
    }
}

newScope();

const bestDeveloper = 'Ruslan Tsykaliak';

function bestDeveloperFunction() {
    // This is called "shadowing" - creating a new variable with the same name in a nested scope
    const bestDeveloper = 'Ruslan Tsykaliak';
    console.log({ inner: bestDeveloper });
}

console.log({ outside: bestDeveloper });
bestDeveloperFunction();

// When JavaScript doesn't find a variable within its scope, it looks up to outer scopes. This is called "looking up the scope chain." It's a one-way street; you can only look out to outer scopes.

const language = 'JavaScript';

while (true) {
    // Looks up the scope chain to access the 'language' variable
    console.log({ language });
    break;
}

while (true) {
    const language = 'JavaScript';
    break;
}
// Cannot look up the scope chain into the while loop; this will cause an error
console.log({ language });
