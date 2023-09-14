// 1) What is event bubbling?

// It's when an envent is triggered on a child element, but that event is then carried up to all parent elements

// For example, an event can occur on a list item, but that evetn will bubble up to the ul wrapper the body tag, etc.

// So, you can handle an event on any parent element of the event target

// This is why you can do things like "Event delegation"



// 2) What is event capturing?

// Well, it's the same thing a bubbling, but it works in reverse

// So, instead of having an event bubble up from child to parent 

// An event actually is captured down from parent to child element and then it bubbles up

// For example, if you had a list item within an ordered list, within a body tag, the event would first be emitted on the body, then the ordered list, then list item


// Example:

const mainElement = document.querySelector('main')
const orderedList = document.querySelector('ol')
const listItem = document.querySelector('li')

mainElement.addEventListener('click', () => {
    console.log('Main Event Handler')
}, {capture: false, once: true})

orderedList.addEventListener('click', () => {
    console.log('Ordered List Event Handler')
}, {capture: false})

// NOTE: Instead of handling each item, you can delegate this event to the ol
listItem.addEventListener('click', () => {
    console.log('Item Event Handler')
}, {capture: flase})


// addEventListener('click', '', {capture: false, once: true})