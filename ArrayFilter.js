// Array.prototype.filter() 

// Takes a callback function to determine what should be filtered into a new array

// passes each value of the array you call on into the callback function

// if you return true in your callback function, it will place that values in the new array

// it returns a new array and does not mutate the original array

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getNumbersGreaterThanFour(value, index, array) {
    console.log(value, index, array)
    return value > 4
}

const numbersGreaterThanFour = myNumbers.filter(getNumbersGreaterThanFour)

console.log(myNumbers, numbersGreaterThanFour)


const myString = [ 'Javascript', 'TypeScript', 'PHP', 'SQL']

const containsAnS = myString.filter((value) => value.includes('s'))
const containsAnSs = myString.filter((value) => value.toLowerCase().includes('s'))
console.log({containsAnS}, {containsAnSs})

const myObjects = [{ name: 'Ruslan', age: 26 }, { name: 'Roman', age: 33 }]

const inTwenties = myObjects.filter((value) => {
    if (value.age >= 20 && value.age < 30){
        return true
    }
    return false
})

console.log(inTwenties)