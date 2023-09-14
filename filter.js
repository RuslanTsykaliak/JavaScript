// 1. Remove a specific item from an array

const value = 3; // Value to remove

const arr = [1, 2, 3, 4, 5]; // Initial array

const filteredArray = arr.filter(
    item => item !== value
);

console.log(filteredArray); // Outputs: [1, 2, 4, 5], as it removes the value '3'


// 2. Remove multiple items from an array

const toRemove = [2, 3, 5]; // Values to remove

const arr2 = [1, 2, 3, 4, 5, 3]; // Initial array

const filteredArray2 = arr2.filter(
    item => !toRemove.includes(item)
);

console.log({ arr2, filteredArray2 });
// Outputs:
// {
//   arr2: [1, 2, 3, 4, 5, 3],
//   filteredArray2: [1, 4]
// }
// It removes the values '2', '3', and '5' from the initial array.
