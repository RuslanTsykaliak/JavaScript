// 16 Need to Know Array Methods

// I will cover map, filter, reduce adn sort in separate videos

// 1) Pus - Adds an element to the end of an array and returns the new array's length

const myArray = [1,2,3,4]
console.log(myArray.push('hey'))
console.log(myArray)

// 2) Pop - Removes the last element of the array and returns it

console.log(myArray.pop())

// 3) Shitf - Removes the first lement of an array and returns it

console.log(myArray.shift())

// 4) Unshift - Adds an element to the front of an array and returns the new array's length

console.log(myArray.unshift(100))

// 5) Slice - Copies the entire array, or a specific portion of the array, and returns the new array

const newCopy = myArray.slice()
console.log({newCopy})
const skipFirstValue = myArray.slice(1)
const middleValues = myArray.slice(1,2)
const lastTwo = myArray.slice(-2)
console.log(skipFirstValue, middleValues)

// 6) Splice - Replaces items in an array and returns the deleted itmes. Mutates the array.

console.log(myArray.splice(1,2, 100, 200, 300))
console.log(myArray)

// 7) indexOf - Takes a value and returns the index of that values or -1 if doesn't exist 

const index = myArray.indexOf(3)
console.log(index)

// 8) Includes - Returns if an array includes a certain values

console.log(myArray.includes(2))

// 9) Concat - Creates a new combined array

console.log(myArray.concat([100,200,300], [700,800,900]))

// 10) Join - Joins an array into a string with a certain delimiter

console.log(myArray.join('$$$$'))

// 11) Flat - Flattens nested array into a less nested array
console.log(myArray.flat()) // from nun - number of levels to flatten

// 12) Reverse - Reverses an array ( does not sort)
console.log(myArray.reverse())

// 13) Find - Takes a callback and returns the found value based on the callback function

function findNumberGreaterThanThree(value) {
    return value > 3
}

const foundValue = myArray.find(findNumberGreaterThanThree)
console.log({foundValue})

// You can do the same with an inline function

const foundValue2 = myArray.find((value, index, originalArray) => {
    if (originalArray.length > 0 && value > 3 && index > 3) {
        return true
    }
})
console.log({foundValue2})

// 14) findIndex - Takes a callback and returns the found index based on the callback function

function findIndexOfGreaterThanThree(value) {
    return value > 3
}
const foundIndex = myArray.findIndex(findIndexOfGreaterThanThree)
console.log({foundIndex})

// You can do the same with an inline function

const foundIndex2 = myArray.findIndex((value, index, originalArray) => {
    if (originalArray.length > 0 && value > 3 && index > 1) {
        return true
    }
})

console.log({foundIndex2})

// 15) some - Takes a callback and returns if some values return true for the callback

function areSomeValuesGreaterThanThree(value) {
    return value > 3
}

const hasNumbersGreaterThanTree = myArray.some(areSomeValuesGreaterThanThree)

// You can do the same with an inline function

const hasNumbersGreaterThanTree2 = myArray.some((value, index, originalArray) => {
    if (originalArray.length > 0 && value > 3 && index > 1) {
        return true
    }
})

console.log({hasNumbersGreaterThanTree})

// 16) every - Takes a callback and returns if every values return true for the callback

 function areAllValuesGreaterThan3(value) {
    return value > 3
}

const hasAllValuesGreaterThan3 = myArray.every(areAllValuesGreaterThan3)
console.log({hasAllValuesGreaterThan3})

// You can do the same with an inline function

const hasAllValuesGreaterThan3second = myArray.every((value, index, originalArray) => {
    if (originalArray.length > 0 && value > 3 && index > 1) {
        return true
    }
})

console.log({hasAllValuesGreaterThan3second})