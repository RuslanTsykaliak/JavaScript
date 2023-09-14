// Arrow Functions in JavaScript

// Arrow functions work very similarly to regular functions, but there are a couple of key differences.

// 1) Syntax differences

// Defining an arrow function with explicit return and block syntax
const addNumbers = (numberOne, numberTwo) => {
    return numberOne + numberTwo
}

// Defining an arrow function with implicit return and parentheses
const addNumbers2 = (numberOne, numberTwo) => (
    numberOne + numberTwo
)

console.log(addNumbers(1, 2))
console.log(addNumbers2(1, 2))


// Implicit returns can only include one expression
// Arrow function with a conditional and explicit return
const addNumbers3 = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return numberOne + numberTwo
    }
}

// Arrow function returning an object with explicit return
const returnAnObject = () => {
    return {
        name: 'Ruslan',
        age: 26
    }
}

// Arrow function returning an object with implicit return and parentheses
const returnAnObject2 = () => (
    {
        name: 'Ruslan',
        age: 26
    }
)

console.log(returnAnObject())
console.log(returnAnObject2())

// Arrow function with a single parameter and implicit return
const returnNumberPlusOne = numberOne => numberOne + 1

console.log(returnNumberPlusOne(3))

// Arrow function with multiple parameters and an array return
const returnNumbersPlusOne = (numberOne, numberTwo) => [numberOne + 1, numberTwo + 1]

console.log(returnNumbersPlusOne(3, 4))


// 2) Arrow functions do not bind a "this" keyword. "this" will be resolved lexically

const codingLanguage = {
    name: 'JavaScript',
    programmers: 17400000,
    details: function () {
        console.log(this) // "this" refers to the object
        return `${this.name} has ${this.programmers} programmers`
    }
}

console.log(codingLanguage.details())

// Returning a function within an object method
const codingLanguage2 = {
    name: 'JavaScript',
    programmers: 17400000,
    details: function () {
        console.log(this) // "this" refers to the object
        return function () {
            console.log(this) // "this" refers to the global object, not the object
            return `${this.name} has ${this.programmers} programmers`
        }
    }
}

console.log(codingLanguage2.details()()) // Note: The inner function call returns undefined

// The arrow function will look up into its parent scope to find this.name and this.programmers
const codingLanguage3 = {
    name: 'JavaScript',
    programmers: 17400000,
    details: function() {
        return () => {
            console.log(this) // "this" refers to the object
            return `${this.name} has ${this.programmers} programmers`
        }
    }
}

console.log(codingLanguage3.details()())

// Common use cases

// Passing arrow functions as callbacks to array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const numbersTimesTen = numbers.map((number) => number * 10)

const numbersGreaterThanTwo = numbers.filter((number) => number > 2)

console.log(numbersTimesTen)
console.log(numbersGreaterThanTwo)

// Also common when handling events within React
function MyComponent() {
    return (
        <button onClick={() => console.log('click')}>
            Click Me
        </button>
    )
}
