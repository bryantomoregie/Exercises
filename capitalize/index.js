// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let strArray = str.split(' ');
    let newArray = [];

    for(let word of strArray){
        newArray.push(word[0].toUpperCase() + word.slice(1));
    }

    return newArray.join(' ')
}

module.exports = capitalize;

/*
    capitalize the first letter in each word of a string and return the string
    I will array, join, capitalize
*/
