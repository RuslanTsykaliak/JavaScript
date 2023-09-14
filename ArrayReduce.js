// Array.prototype.reduce()

// Reduce is a higher-order function that takes multiple values and outputs a single value.

// Reduce takes two arguments:

// Argument #1 is a callback function that defines how the reduction should happen.

// Argument #2 is the initial value (default value) for the accumulator.

// Reduce calls the callback function with two arguments:

// The first argument is the accumulator, which stores the intermediate result.

// The second argument is the current value of the array being processed.

// If it's your first time in the reduce iteration, you can pass an initial value to set the accumulator's starting point.

// If you don't pass an initial value, the first value of your array will be the initial accumulator value.

// Whatever you return in the callback function will be passed as the accumulator in the next iteration or the next callback call.

const numberArray = [1, 2, 3, 4, 5, 6, 7];

function getSum(accumulator, currentValue, index, array) {
    console.log(accumulator, currentValue, index, array);
    return accumulator + currentValue; // Add the current value to the accumulator.
}

const sum = numberArray.reduce(getSum, 0); // Calculate the sum of all numbers in the array starting with an initial accumulator value of 0.

const sum2 = numberArray.reduce((acc, curr) => acc + curr, 0); // The same sum calculation using a shorter arrow function.

console.log(sum, sum2);

const stringArray = ['javaSCRIPT', 'PHP', 'SQL'];

function toLowerAndUnderscorify(accumulator, curr) {
    const lowerCaseCurr = curr.toLowerCase();
    return `${accumulator.toLowerCase()}_${lowerCaseCurr}`; // Convert to lowercase and add an underscore.
}

const underscoredString = stringArray.reduce(toLowerAndUnderscorify, ''); // Combine string elements with underscores.

const underscoredString2 = stringArray.reduce((acc, curr) => {
    const lowerCurr = curr.toLowerCase();
    return acc + '_' + lowerCurr; // The same string combination using a shorter arrow function.
}, '');

console.log({ underscoredString });

const objectArray = [
    { name: 'JavaScript', programmers: 100000, stack: 'frontend' },
    { name: 'SQL', programmers: 20000, stack: 'backend' },
    { name: 'PHP', programmers: 100000, stack: 'backend' },
    { name: 'TypeScript', programmers: 30000, stack: 'frontend'}

];

const frontendProgrammers = objectArray.reduce((acc, curr) => {
    if (curr.stack === 'frontend') {
        return acc + curr.programmers; // Accumulate the number of frontend programmers.
    }
    return acc;
}, 0);

console.log(frontendProgrammers); // Calculate the total number of frontend programmers in the array of objects.
