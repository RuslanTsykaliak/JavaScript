// While loops allow you to run some code over and over again while some condition remains true

// Examples
let count = 0

while (count < 10) {
    console.log(`The count is ${count}`)
    // Make sure you cause the condition to be within your while loop
    count += 1
    // if (condition) break
}

// The while loop is much better than needing to do something like 

if (count < 10) {
    count += 1
}
if (count < 100) {
    count += 1
}
// up to ten times

console.log(`The count of ${count}`)

// There are also do while() loops, but you'll probably almost never see them
