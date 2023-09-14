// 6 String Methods You Need To Know

// 1) .replace() and .replaceAll()
const stringWithThings = 'some-string-with-these-things';

// Replace a single occurrence of '-' with a space
const stringWithoutOneThing = stringWithThings.replace('-', ' ');

// Replace all occurrences of '-' with spaces
const stringWithoutAllThings = stringWithThings.replaceAll('-', ' ');

console.log(stringWithThings);
console.log(stringWithoutOneThing);
console.log(stringWithoutAllThings);

// 2) .slice()
const stringThatsTooLong = 'thisStringIsTooLong';

// Get a substring starting from index 5 to the end
const shorterString = stringThatsTooLong.slice(5);

// Get a substring from index 5 to 10 (exclusive)
const evenShorterString = stringThatsTooLong.slice(5, 10);

// Get the last character of the string
const lastCharacter = stringThatsTooLong.slice(-1);

// Get a substring from the third to the second-to-last character
const skipLastCharacter = stringThatsTooLong.slice(-3, -1);

console.log(shorterString);
console.log(evenShorterString);
console.log(lastCharacter);
console.log(skipLastCharacter);

// 3) .toLowerCase() and .toUpperCase()
const lowerCaseString = 'lowercasestring';

// Convert to uppercase
const upperCaseString = lowerCaseString.toUpperCase();

// Convert back to lowercase
const lowerCaseAgain = lowerCaseString.toLowerCase();

console.log(upperCaseString);
console.log(lowerCaseAgain);

// 4) .trim() and .trimStart() and .trimEnd()
const stringWithPadding = '   hello   ';

// Remove leading and trailing spaces
const stringWithoutPadding = stringWithPadding.trim();

// Remove leading spaces
const stringWithoutStartPadding = stringWithPadding.trimStart();

// Remove trailing spaces
const stringWithoutEndPadding = stringWithPadding.trimEnd();

console.log({ stringWithPadding });
console.log({ stringWithoutPadding });
console.log({ stringWithoutStartPadding });
console.log({ stringWithoutEndPadding });

// 5) .indexOf() and .lastIndexOf()
const myName = 'Ruslan Tsykaliak';

// Find the index of the first occurrence of 'r'
const indexOfR = myName.indexOf('r');

// Find the index of 'r' starting from the second character
const indexOfRAfter4 = myName.indexOf('r', 1);

// Find the index of the substring 'li'
const indexOfPartialString = myName.indexOf('li');

// Find the index of the last occurrence of 'a'
const indexOfLastA = myName.lastIndexOf('a');

// Find the index of 'a' starting from the fifth character
const indexOfLastABefore4 = myName.lastIndexOf('a', 4);

console.log({ indexOfR });
console.log({ indexOfRAfter4 });
console.log({ indexOfPartialString });
console.log({ indexOfLastA });
console.log({ indexOfLastABefore4 });

// 6) .split()
const stringWithTexts = 'some-string-with-text';

// Split the string into an array of words using space as a delimiter
const arrayOfTexts = stringWithTexts.split(' ');

// Split the string into an array with a maximum length of 1
const arrayOfText = stringWithTexts.split('-', 1);

// Split the string into an array using '-with' as a delimiter
const arrayOfTextsWithMatchingMultiple = stringWithTexts.split('-with');

console.log({ stringWithTexts });
console.log({ arrayOfTexts });
console.log({ arrayOfText });
console.log({ arrayOfTextsWithMatchingMultiple });

// 1 Property - .length
const oneCharacter = 'R';
const bestProgrammist = 'Ruslan Tsykaliak';

// Get the length of the strings
const oneCharacterLength = oneCharacter.length;
const bestProgrammistLength = bestProgrammist.length;

console.log({ oneCharacter });
console.log({ bestProgrammist });
console.log({ oneCharacterLength });
console.log({ bestProgrammistLength });
