// JSON Stands for JavaScript Object Notation

// It's a text-based format that's commonly used for transmitting data across the web.

// In other words, it's just a universal way to represent data as a string.

// e.g., sending data from client to server and vice versa.

// Since it's text-only, it's more easily sent between computers.

// It's also language-independent and can be converted easily into other languages.

// Valid JSON values are strings, numbers, objects, arrays, booleans, and null.

// Dates, functions, and undefined aren't allowed.

// It looks like JavaScript, but there are some key differences.

const example = {
    name: 'Ruslan',
    language: 'English',
    age: 26
}

const stringified = JSON.stringify(example);

// You must parse JSON to use it in JS.
const parsed = JSON.parse(stringified);

console.log({ stringified, parsed });

const validJSON = {
    "squadName": "Superhero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
    ]
};

// Key Notes:

// Double quotes around strings and properties.

// A single comma or misplaced colon can result in invalid data.

// Example:

async function populate() {
    const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    // fetch returns a Response object with .json method.
    const response = await fetch(url);
    const superHeroes = await response.json();

    console.log({ response });
    console.log({ superHeroes });
}

populate()