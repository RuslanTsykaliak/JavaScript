// Think an empty object is falsy

// You might want to do this 

const object = {}

if (!object){
    console.log('object is empty')
}

if (object){
    console.log('Empty objects are truthy')
}

// Do this to check if the object is empty
if (Object.keys(object).length === 0) {
    console.log('Object is empty')
} else {
    console.log('Not empty')
}