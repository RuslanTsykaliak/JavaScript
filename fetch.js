// The fetch method providers an easy way to make network request

// fetch is a global method that you can call to make these request

// Fetch is async, and returns a promise

// The promise will resolve the a Response object. If the response contains JSON data you can use the Response.json() method to parse the JSON 

// The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. The Promise will resolve with the ok propery of the response set to false and it will only reject on network failure or if anything prevented the request from completing.

// Basic fetch example

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'


fetch(url)
.then((response) => {
    console.log(response)
    return response.json()
})
.then((data) => console.log(data))


// You can also pass options to the fecth method
// MDN example

async function postData(url = '', data = {}) {
    // Default option are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *defaul, no-cache
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type
    })

    return response.json(); // parse JSON response
}

postData('https://example.com/answer', {
    answer: 42
})

// You can also create your own request object

const myHeaders = new Headers()

// Request has same API as fetch
const myRequest = new Request('image.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
})

fetch(myRequest)
.then((response) => response.blob())
.then((myBlob) => {
    myImage.src = URL.createObjectURL(myBlob)
})

// There's more you can do with configuring fetch














