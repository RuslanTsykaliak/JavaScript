// Destructuring in JavaScript

// What is "destructuring"?
// It allows you to pull out values from an array or object and immediately assign that value to a variable.
// This prevents you from needing to declare a bunch of variables.

// Example

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const obj = {
    name: 'Ruslan',
    age: 26,
    job: 'React Developer'
}

const [one, two] = arr // Destructuring array values into variables
const { name } = obj // Destructuring object properties into variables
const { age } = obj

console.log(one)
console.log(two)
console.log(name)
console.log(age)

// Skip values with a comma
const [, , three, four, , , , eight] = arr

console.log({ three, four, eight })

// Default Values
const [first = 1, second = 2] = arr // Assign default values if values are undefined
const { language = 'English' } = obj

console.log({ first, second, language })

// ...rest property
const [nine, ten, ...rest] = arr // Use the rest operator (...) to capture remaining values
const { job, ...restTwo } = obj

console.log(rest)
console.log(restTwo)

// Nested Destructuring
const arr2 = [[1, 2], [3, 4]]
const obj2 = {
    innerObj: {
        myName: 'Ruslan'
    },
    innerObj2: {
        myAge: 26
    }
}

const [[One, Two], [Three, Four]] = arr2 // Destructuring nested arrays
console.log({ One, Two, Three, Four })

const { innerObj: { myName }, innerObj2: { myAge } } = obj2 // Destructuring nested objects
console.log({ myName, myAge })

const objName = { Name: 'Ruslan' }
const { Name: MyName } = objName // Renaming destructured variable
console.log({ MyName })

// Function param destructuring
const person = {
    name: 'Roman',
    age: 33
}

function greet({ name, age }) { // Destructuring function parameters
    return `Hi, ${name}. You're ${age}.`
}

const greeting = greet(person)

console.log(greeting)
