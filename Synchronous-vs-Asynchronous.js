// Synchronous VS Asynchronous

// Synchronous

// By default, JavaScript is going to execute your code line-by-line synchronously from the top of your file to the bottom of your file

console.log('line 7')

console.log('line 9')

console.log('line 11')

// JavaScript will run this entire loop before moving on

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('line 19')



// Asynchronous

// JavaScript does have the ability to run code asynchronously (in the background)

console.log('line 27')

// setTimeout is an example of asynchronous code that schedules a function to run after a specified delay (in milliseconds)
setTimeout(() => {
    console.log('Timeout running')
}, 1000)

console.log('line 34')


// Why is async code useful?

// JavaScript is single-threaded, so it can only do one thing at a time

// So, what if you need to perform some task that takes a long time to complete like a network request?

// Well, by default, you'd just have to wait for that longer task to complete before running more code

// But with async code, you can make a network request, keep running the rest of your file, and then come back to do some stuff asynchronously once your network request completes
