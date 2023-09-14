// addEventListener In JavaScript Explained

// 1) What's an event?

// An event represents some action the user takes

// This could be a click, mouse drag, keydown, etc.

// The event will be a JavaScript object with some data allowing you to 'handle the event

// For example, if a user clicks a button the browser will emmit an event, a JavaScript object, that yu can then "capture" and perform some action

// So, if they click on the sign in button, you could handle this onClick event an send the user to the logged-in home page

// 2) What's addEventListener

// addEventListener is a method that allows you to "listen", or wait for some event to occur on an element and then "handle" that event 


// 3) How's addEventListener work?

// You call the addEventListener method on a "target"

// Common targets are HTML elements, the document, the window, etc

// There are other ways to add event listeners, like directly in your HTML, but this is the recommended approach

// The "target" is going to be the element that triggers the evetn

// For example, your target might be a button, and you can add an event listener to the button to handle when that button is clicked

// addEventListener has a few different parameters you can pass, but the main two are the event type and a listener function

function onClickFunction() {
    console.log("Clicked");
}

buttonElement.addEventListener("click", onClickFunction)

// Often, after adding an event listener, you might want to cleanup after yourself and remove the event listener

// you can do this by calling removeEventListener method

buttonElement.removeEventListener("click", onClickFunction)


////
let resized = 0

function increment() {
    console.log('resized')
    resized += 1
    checkIfShouldRemove()
}

window.addEventListener('resize', increment)

function checkIfShouldRemove() {
    if (resized > 10) {
        window.removeEventListener('resize', increment)
    }
}



// Bubbling and capturing are two ways that events propagate in JavaScript. Bubbling is when the event starts at the target element and propagates up the DOM tree to the document. Capturing is when the event starts at the document and propagates down the DOM tree to the target element.

// The default behavior for events is bubbling. This means that when an event occurs, it will be called on the target element first, and then on its parent element, and so on, until it reaches the document.

// Capturing can be used to prevent an event from bubbling up to the document. To do this, you can use the capture option when you add the event listener. For example, the following code will add a click event listener to a button, but it will only be called if the event is captured:

const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('The button was clicked!');
}, true);

// The true in the third argument indicates that the event should be captured.

// Bubbling and capturing can be used together to create more complex event handling logic. For example, you could use capturing to prevent an event from bubbling up to the document, and then use bubbling to propagate the event to other elements in the DOM tree.