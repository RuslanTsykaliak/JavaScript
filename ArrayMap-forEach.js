// .map() and forEach() functions

// 1) forEach

// Takes a callback function as an argument and passes the callback function each value of the array, its index, and the array itself. Does not return anything

const myArray = ['one', 'two', 'three', 'four', 'five']

function callbackFunction(value, index, array) {
    console.log(value, index, array)
    // array[index] = value + 's'
}

myArray.forEach(callbackFunction)

console.log(myArray)

myArray.forEach((value, index, array) => {
    console.log(value, index, array)
    array[index] = value + 's'
})

// 2) map()

// Takes a callback function as an argument and passes the callback function each value of the array, its index, and the array itself. And returns a new array of whatever is returned in the callback function



const myArray2 = ['one', 'two', 'three', 'four', 'five']

function callbackFunction2(value, index, array) {
    console.log(value, index, array)
    return value +'s'
}

const newArray = myArray2.map(callbackFunction2)
console.log(newArray)

const newArray2 = myArray.map((value) => value + 's')
console.log(newArray2)