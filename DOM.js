// JavaScript DOM Tutorial For Beginners

// The DOM stands for teh document object model

// The DOM is a programmer friendly representation of the web page

// The browser will create this document object with the HTML that's sent from the server

// And all elements of the web page will be represented as a tree-like data structure

// The elements are called DOM 'nodes

// And you can use this document object to interact with the web page with JavaScript because JavaScript runs within the browser

// For example:

document.createElement()
document.addEventListener()
document.append()
document.querySelector()
document.location()


document.createElement() 
// creates a new HTML element. The first argument is the name of the element to create. 

const titleElement = document.createElement('div')

// Then, once you create the element, you can add different classes or content to the element

titleElement.textContent = 'Hello World!'

// To show the element on the page, you then need to manually ad it

document.body.append(titleElement)

// Example:

const app = document.getElementById('app')

const title = document.createElement('h1')
const p = document.createElement('p')
p.textContent = "Best Programmer"

title.textContent = 'Ruslan Tsykaliak'

app.append(title)




// document.addEventListener() adds an event listener to an element. The first argument is the event name, the second argument is the function that will be called when the event occurs, and the third argument is an optional parameter that can be used to customize the event listener. For example, to add a click event listener to a button, you would use the following code:


const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('The button was clicked!');
});


// document.append() appends an element to another element. The first argument is the element to append, and the second argument is the element to append it to. For example, to append a new `div` element to the body of the document, you would use the following code:


const div = document.createElement('div');
div.innerHTML = 'This is a new div element.';
document.body.append(div);


// document.querySelector() selects an element by its id or class name. The first argument is the id or class name of the element to select. For example, to select the element with the id `my-element`, you would use the following code:


const element = document.querySelector('#my-element');


// document.location returns the current location of the document. This includes the protocol, hostname, port, and path. For example, to get the current URL, you would use the following code:


const url = document.location;
