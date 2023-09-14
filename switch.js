// A switch statement allows you to check some conditions and perform a task depending on what condition is met.
// It acts much like an if statement, but it can be a bit more readable in some cases.

// How do switch statements work?

const programmingLanguage = 'Rust'

switch (programmingLanguage) {
    case 'JavaScript':
        console.log("It's JavaScript!")
        // break; prevents running the next case statement
        break
    case 'PHP':
        console.log("It's PHP!")
        break
    case 'C++':
        console.log("It's C++!")
        break
    case 'Python':
        console.log("It's Python!")
    default:
        console.log("I don't know that language!")
}

// You can usually do the same thing with if statements
if (programmingLanguage === 'JavaScript') {
    console.log("It's JavaScript!")
} else if (programmingLanguage === 'PHP') {
    console.log("It's PHP!")
} else if (programmingLanguage === 'C++') {
    console.log("It's C++!")
} else if (programmingLanguage === 'Python') {
    console.log("It's Python!")
} else {
    console.log(`It's ${programmingLanguage}!`)
}


// Using multiple conditions within switch statements

switch (programmingLanguage) {
    case 'JavaScript':
    case 'PHP':
        console.log("It's JavaScript or PHP!")
        break
    case 'C++':
    case 'Python':
        console.log("It's C++ or Python!")
        break
    default:
        console.log("I don't know that language!")
}
