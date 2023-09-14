// JavaScript Functions Explained

// 1) What are functions?
// - Functions allow you to write reusable code to perform tasks.
// - They make code more maintainable, readable, DRY (don't repeat yourself), and dynamic.
// - Functions create their own execution context and scope.
// - They effectively create a mini-program within your overall program.

// 2) How do you create functions in JavaScript?

// A) Function Declaration
thisIsAFunction();
function thisIsAFunction() {
    // Function code
    return 'hello';
}

// B) Function Expression
const thisIsAlsoAFunction = function() {
    return 'hello';
};
thisIsAlsoAFunction();

// C) Named Function Expression
const stillAFunction = function myFunction() {
    return 'hello';
};
stillAFunction();

// D) Arrow Functions
const arrowFunction = () => {
    return 'hello';
};
arrowFunction();

// 3) How do functions work?

// - Functions need to be called to run; JavaScript won't enter a function until it's called.
// - You call/invoke a function by using () at the end of the function name.

function exampleFunction() {
    console.log('Needs to be called');
}

// You can call a function multiple times.
exampleFunction();
exampleFunction();
exampleFunction();

// A function returns undefined if you don't use a return keyword; otherwise, it returns what's after the return keyword.

function getUndefined() {
    // No return statement
}

console.log(getUndefined());

// Returns 4
function getFour() {
    return 4;
}

console.log(getFour());

// The return keyword marks the end of the function.
function returnEarly() {
    if (false) {
        return 'it was true!';
    }
    return 'it was false!';
}

console.log(returnEarly());

// Functions can define parameters, making the function more dynamic.
// You can pass arguments into the function that has defined parameters.

// Non-dynamic function
function getTen() {
    return 10;
}

console.log(getTen());

// Dynamic function
function addTen(number) {
    return number + 10;
}

console.log(addTen(4));

// Most dynamic function
function addNumbers(numberOne, numberTwo) {
    if (!numberTwo) return numberOne; // Prevents NaN when numberTwo is not provided
    console.log(typeof numberTwo);
    return numberOne + numberTwo;
}

console.log(addNumbers(4, 5));

// What if you don't pass arguments when it accepts parameters?
console.log(addNumbers(4)); // NaN without a check

// You can pass functions into other functions
function doSomethingAndReturnAnArray(callbackFunction, array) {
    const newArray = [];
    for (const value of array) {
        const callbackFunctionReturnValue = callbackFunction(value);
        newArray.push(callbackFunctionReturnValue);
    }
    return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplyBy10(value) {
    return value * 10;
}

const numbersMultiplyBy10 = doSomethingAndReturnAnArray(multiplyBy10, numbers);

console.log(numbersMultiplyBy10);
