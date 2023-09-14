// The ternary operator is the only operator in JavaScript that takes 3 operands, hence "ternary."

// This is also called the conditional ternary operator, as it allows you to evaluate some condition
// and then execute some expression depending on the condition.

// The syntax will be as follows:

// condition ? exp1 : exp2

// ? checks if the condition is truthy

const age = 26;
const legalAge = 21;

const drink = age >= legalAge ? 'Beer' : 'Juice';

console.log(drink);

// Commonly used to check for null
const greeting = (person) => {
    const name = person
        ? person.name
        : "stranger";
    return `Howdy, ${name}`;
};

console.log(greeting({ name: 'Alice' }));
console.log(greeting(null));

// Not great practice to nest ternary but you can

function example() {
    return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
