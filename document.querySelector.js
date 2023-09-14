// document.querySelector() is used to retrieve HTML elements from the DOM within JavaScript

// So, it allows you to get a DOM element with JavaScript, and then do something with that element like adding a class, changing its content, adding an event listener, etc.

// There are other ways to retrieve elements, but I think this is the most straightforward and flexible way for getting various elements

// How it works:
// You use the document object created by the browser, and then you access the querySelector method on it.

// The querySelector method takes one argument, a string, that's a CSS selector to decide what HTML element to retrieve.

// It will retrieve the first element it finds that matches the selector.

// e.g. document.querySelector('#some-id')

// However, you can use querySelectorAll() to retrieve a NodeList of all elements that match your selector.

// NOTE: a NodeList isn't an array you can iterate over it with forEach, but to do other iterations, you should convert it to an array first.

// e.g. document.querySelectorAll('li')

const title = document.querySelect("#title")
console.log(title)
title.style.color = 'red'

// Returns a NodeList

const listItems = document.querySelectorAll('li')

const arrList = Array.from(listItems)
const anotherList = [...listItems]

console.log(anotherList)
