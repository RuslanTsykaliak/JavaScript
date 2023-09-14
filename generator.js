// A generator in JavaScript is a function that you can run, pause, re-enter

// Calling a generator funciotn doesn't run the function right away

// Rather, calling the generator function will just return a generator object

// The generator object will have a next method where you can yield the next value from your generator function

// Examples

// ID Maker

function* idMaker() {
  let id = 0;
  while (true) {
    yield id++
  }
}

// This generator instance will be different than all other generator objects
const gen = idMaker()
const gen2 = idMaker() // unuqui

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// Passing arguments 
function* passingArgs() {
    let i = yield 1
    yield i
    return "all done"
}

const gen3 = passingArgs()

console.log(gen3.next())
console.log(gen3.next(12))
 // Done = true
 console.log(gen3.next())

 
 // Use cases

 // Not used in React.

// However, they are used with async JavaScript to pause functions until a promise resolves

// They can also be used to generate sequential ID's, although plenty of libs will generate a random ID

// They can be sued by library authors and to create iterators