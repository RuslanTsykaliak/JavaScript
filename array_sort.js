// How to sort an array of objects?

const objects = [
    { first: 'John', last: 'Jo', age: 10 },
    { first: 'Mary', last: 'Maya', age: 40 },
    { first: 'Chris', last: 'Cran', age: 33 },
    { first: 'Bob', last: 'Brend', age: 22 },
    { first: 'Tim', last: 'Tyler', age: 12 },
    { first: 'David', last: 'Duncan', age: 55 }
]

// Solution 1: Using slice() to avoid mutation

// Make the sorting case-insensitive
const sorted = objects.slice().sort((a, b) => {
    if (a.last.toLowerCase() < b.last.toLowerCase()) {
        return -1;
    } else {
        return 1;
    }
})

console.log({ objects }); // Original array remains unchanged
console.log({ sorted }); // Sorted array

// Solution 2: Inline function

const sorted2 = objects.sort((a, b) => a.last < b.last ? 1 : -1);
console.log({ objects }); // Original array is now sorted
console.log({ sorted2 });

// Solution 3: Using localeCompare() for string comparison

const sorted3 = objects.sort((a, b) => a.last.localeCompare(b.last));
console.log({ objects }); // Original array is now sorted
console.log({ sorted3 });

// Solution 4: Sorting by a different property (e.g., age)

const sorted4 = objects.sort((a, b) => a.age < b.age ? 1 : -1);
console.log({ objects }); // Original array is now sorted by age
console.log({ sorted4 });
