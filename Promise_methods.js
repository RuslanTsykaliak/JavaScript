// Takes an array of promises as input and returns a Promise that will fulfill when every promise from your input has either fulfilled or rejected.

// For each outcome object, a status string is present. If the status is fulfilled, then a value is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.

// Example promises
const promise1 = Promise.reject('Some error')
const promise2 = new Promise((resolve, reject) => (
    setTimeout(resolve, 100, 'quick')))
const promise3 = new Promise((resolve, reject) => (
    setTimeout(resolve, 500, 'slow')))

const promises = [promise1, promise2, promise3]


// Using Promise.allSettled to wait for all promises to settle (either fulfilled or rejected)
Promise.allSettled(promises)
    .then((results) => {
        console.log('Promise.allSettled results:', results);
    })
    .catch((error) => {
        console.log('Promise.allSettled error:', error);
    });


/////////
// Promise.race() returns the value of the first promise that resolves or rejects.
// Returns a promise that fulfills or rejects as soon as one of the promises passed in fulfills or rejects. It will ignore all other promises when the first fulfills or rejects.
Promise.race(promises)
    .then((value) => {
        console.log('Promise.race result:', value);
    })
    .catch((error) => {
        console.log('Promise.race error:', error);
    });


///////
// Promise.any() returns the first resolved promise.
// This method is useful for returning the first promise that that fulfills. It shourt-circuits after a promise fulfilss, so it doesn't wait for the other prmoises ro complete once it finds one.

// So, if any promise resolves, it returns tht value right away. It will ignore promises that are rejected
Promise.any(promises)
    .then((value) => {
        console.log('Promise.any Resolved:', value);
    })
    .catch((e) => {
        console.log('Promise.any Rejected:', error);
    });

// Unlike Promise.all(), which returns an array of fulfillemtn values, we only get one fulfillment value. This can be beneficial if we need only one promise to fulfill but we don't care which one does.

// allSettled returns an array of all settled promises, regardless of rejection of fulfilled

// Also, unlike Promise.race(), which returns the first settled value (either fulfillment or rejection), this method returns the first fulfilled value. This method will ignore all rejected promises up until the first promise is fulfilled


////////
// Promise.all() returns an array of all fulfilled promises. If any of the passed-in promises reject, Promise.all() will immediately reject. This is different from Promise.allSettled, which still fulfills with the results of all promises, even if some of them reject. This makes Promise.allSettled suitable for cases where you want to know the outcome of every promise, whether they succeed or fail.

// Takes an array of promises and returns a single promise. This single promise will fulfill when all of the input's promises have fulfilled. It fulfills with an array of values of the input promises. The single returned promise will reject immediately if any of the input promises reject.
Promise.all(promises)
    .then((values) => {
        console.log('Promise.all results:', values);
    })
    .catch((error) => {
        console.log('Promise.all error:', error);
    });

// Another good use-case is making multiple API requests without needing to wait for each one to run the next

async function getStuff() {
    const promiseOne = fetch("https://jsonplaceholder.typicode.com/todos/1")
    const promiseTwo = fetch("https://jsonplaceholder.typicode.com/todos/2")
    const res = await Promise.all([promiseOne, promiseTwo])
    const data = [await res[0].json(), await res[1].json()]
    console.log(data)
}

getStuff()
