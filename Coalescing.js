// Nullish Coalescing Explained

// It's a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined; otherwise, it returns its left-hand side operand. ??

const y = 0 ?? 'falsy'; // In this example, 'y' will be assigned the value 'falsy' because 0 is not null or undefined.
console.log({ y });

// How is it different than the || operator

// || checks if a value is falsy

const x = 0 || 'falsy'; // In this example, 'x' will be assigned the value 'falsy' because 0 is falsy.
console.log({ x });
