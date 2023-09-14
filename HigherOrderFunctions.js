// Higher Order Function In JavaScript Explained

// 1) What is a higher order function?

// It's a function that accepts another function as a parameter
// or it's a function that returns another function
// So, if a function's input is a function, or its output is a function, it's a higher order function

// So, a higher order function has multiple "levels" of functions
// It's a function itself, and it either accepts a function as a parameter
// And/or it returns another function

// In JavaScript, functions are just values that you can pass all around your program
// This makes higher order functions possible

// Example
function takesAFunction(callback) {
    return callback()
}
function returnsAFunction() {
    return function () {
        console.log('Hello World!')
    }
}

// 2) Why are higher order functions useful? + Examples

// A) Makes your code more readable

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbersTimes10 = []

for (const num of numbers) {
    numbersTimes10.push(num * 10)
}

console.log(numbersTimes10)

function multipleBy10(num) {
    return num * 10
}

const numbersTimes10s = numbers.map(multipleBy10)

console.log(numbersTimes10s)

// B) Makes your code more reusable, preventing you from repeating yourself 

function copyArrayAndMultiplyByTwo(array) {
    const newArray = []
    for (const num of array) {
        newArray.push(num * 2)
    }
    return newArray
}

function copyArrayAndMultiplyByThree(array) {
    const newArray = []
    for (const num of array) {
        newArray.push(num * 3)
    }
    return newArray
}

const numbersByTwo = copyArrayAndMultiplyByTwo(numbers)
const numbersByThree = copyArrayAndMultiplyByThree(numbers)

console.log(numbersByTwo)
console.log(numbersByThree)

/////////
function copyArrayAndManipulate(array, instructions) {
    const newArray = []
    for (const num of array) {
        newArray.push(instructions(num))
    }
    return newArray
}

function multipleByTwo(num) {
    return num * 2
}

function multipleByThree(num) {
    return num * 3
}

function createMultiplyFunction(factor) {
    return function (num) {
        return num * factor
    }
}

const numbersByTwo2 = copyArrayAndManipulate(numbers, multipleByTwo)
const numbersByThree3 = copyArrayAndManipulate(numbers, multipleByThree)

const numbersByTwo21 = copyArrayAndManipulate(numbers, createMultiplyFunction(2))
const numbersByThree31 = copyArrayAndManipulate(numbers, createMultiplyFunction(3))


// C) Allows you to customize functions and return the customized function

// NOTE: The passed-in function is often called a callback function
function onceify(callback) {
    let count = 0
    return function () {
        if (count === 0) {
            count++
            return callback()
        } else {
            return "This function can only be called once"
        }
    }
}

function sayHello() {
    return 'Hello'
}

const sayHelloOnce = onceify(sayHello)

console.log(sayHelloOnce())
console.log(sayHelloOnce())
console.log(sayHelloOnce())

// D) Allows you to do more complex logic within a single function

// If I wrote all of this logic in one function, it may make things quite a bit more complicated
function handleSurveyCompleted(
    getUser,
    surveyId,
    getSurvey,
    makeSurveyCompleted,
    sendCompletedSurveyToDataBase
) {
    const user = getUser()
    const survey = getSurvey(surveyId)
    makeSurveyCompleted(surveyId)
    return sendCompletedSurveyToDataBase(user.id, survey)
}

// There are likely several more use-cases where higher-order functions
// but hopefully these examples allow you to see some possibilities
// and why they might be useful
