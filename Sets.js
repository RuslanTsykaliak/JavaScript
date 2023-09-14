// Sets in JavaScript Explained

// 1) What is a set?

// A set is a collection of unique values.

// They're ordered by how elements are inserted.

// But you can't index a set like an array.

// 2) How do you create a set?

// You need to call the Set function with the new keyword.

// You can pass in an iterable to the new Set() function
const mySet0 = new Set([1, 2, 3, 4, 4, 4, 4, 5])
console.log(mySet0)

// 3) How do sets work?

// Creating a set
const mySet = new Set()

// Adding elements to a set
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)

console.log(mySet)

// Removing elements from a set
mySet.delete(1)

// Check if a value is in a set
console.log(mySet.has(1))
console.log(mySet.has(2))

// Getting the keys in a set

console.log(mySet.keys())

// Getting the values in a set

console.log(mySet.values())

// Getting the entries in a set

console.log(mySet.entries())

// Clearing a set

mySet.clear()

// 4) How to use iteration with sets?

// For loops
for (const value of mySet) {
    console.log(value)
}

// Spreading sets

console.log([...mySet])

// Array.from() sets

console.log(Array.from(mySet))

// 5) Interview Question - Remove all duplicates elements of an Array

const arrayWithDuplicates = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 8]

console.log(arrayWithDuplicates)

// Solutions
// const newSet = new Set(arrayWithDuplicates)
// console.log(newSet)

// const arrayWithoutDuplicates = Array.from(new Set(arrayWithDuplicates))
const arrayWithoutDuplicates = [...new Set(arrayWithDuplicates)]

console.log(arrayWithoutDuplicates)
