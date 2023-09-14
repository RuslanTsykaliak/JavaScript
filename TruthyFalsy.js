// JavaScript Truthy and Falsy Values

// 1) What does it mean if a value is "truthy" or "falsy"?

// A value is falsy if it evaluates to false when coerced to a Boolean (e.g., using a conditional).
// A value is truthy if it evaluates to true when coerced to a Boolean.

// 2) How do you know if a value is truthy or falsy in JavaScript?

// It's best to remember what values are falsy or look them up, and then you know everything else is truthy.

// Falsy Values: 0, -0, "", null, NaN, false, undefined

// A couple of tricky values that you might think are falsy include:
// [], {}, " ", -1

// true
const values = [[], {}, " ", -1]
values.forEach(value => console.log(Boolean(value)))

// 3) Why is this useful, and where will you see it come up?

// A) One of the most common use cases for this is in conditional statements.

const variable = ""

// You can also use the not (!) operator.
if (variable) {
    console.log("This value is truthy")
} else if (!variable) {
    console.log("This value is falsy")
}

// B) Ternary operators

const text = variable ? 'is truthy' : 'is falsy'
console.log(text)

// C) || Operator

const text2 = variable || "Falsy"
console.log(text2)

// D) && Operator

const text3 = variable && "Truthy"
console.log(text3)
