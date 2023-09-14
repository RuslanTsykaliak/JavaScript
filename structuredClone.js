
const originalObject = {
    names: ['JavaScript', 'TypeScript', 'PHP'],
    frameworks: ['React JS', 'React Native', 'Next JS']
}

// Object.assign is shallow copying
// const copiedObject = Object.assign({}, originalObject)
// const copiedObject = {...originalObject}


const copiedObject = structuredClone(originalObject)


copiedObject.names.push('Python')

console.log(originalObject)
console.log(copiedObject)

//////
const arr = [{language: 'JavaScript'}, {language: 'Python'}]

const copiedArray = structuredClone(arr)

copiedArray.names.push('Rust')
console.log(arr)
console.log(copiedArray)