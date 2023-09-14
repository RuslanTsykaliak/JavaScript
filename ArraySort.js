// Array.prototype.sort()

// Sort  - Sorts the array in place and returns the mutated array.

// By default, it converts the elements to strings and then sorts them

// Takes an optional comparison function to determine what value shoud be in front of the other
// Return a negative value if the first value should be in front, and a positive value if the second value past to be in front

const myArray = ['b', 't', 'e', 'r', 'q', 's', 'a']
console.log(myArray.sort())
console.log(myArray)

const myNumberArray = [40, 700, 1004, 8]
console.log(myNumberArray.sort()) // [ 1004, 40, 700, 8]

function sortNumbers(a, b) {
    if (a < b) {
        return -1
    } else {
        return 1
    }
}
console.log(myNumberArray.sort(sortNumbers))

myNumberArray.sort((a, b) => a - b)
console.log(myNumberArray)

const myObjectArray = [{ name: 'Ruslan', age: 26 }, { name: 'Roman', age: 33 }]

function sortObjectByAge(a, b) {
    if (a.age < b.age) {
        return -1
    } else {
        return 1
    }
}

myObjectArray.sort(sortObjectByAge)
console.log(myObjectArray)

console.log(myObjectArray.sort((a, b) => a.age - b.age))