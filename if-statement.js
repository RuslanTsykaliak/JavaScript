// 1) What is an 'if statement'?

// If statements allow your program to go down different paths depending on certain data within your program.

// So, you give your program some condition, and depending on what that condition evaluates to, your program will go down different paths.

// 2) How if statements work in JavaScript

const count = 4

// The if condition needs to evaluate to a boolean
if (count < 5) {
    console.log('The count is less than 5')
}
else if (count < 10 ) {
    console.log('The count is less than 4, but less than 10')
}
else {
    console.log('The count is greater than 9')
}

// You can have multiple conditions within parens
if (count < 5 && count > 0) {
    console.log('The count is less than 5 and greater than 0')
}

// Preferences for early-return to if/else statements
function getCount(count) {
    if (count < 5) {
        return 'The count is less than 5'
    }
    else if (count < 10 ) {
        return 'The count is less than 4, but less than 10'
    }
    else {
        return 'The count is greater than 9'
    }
}

console.log(getCount(4))
console.log(getCount(7))
console.log(getCount(12))
