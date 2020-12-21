// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let word1 = stringA.replace(/\W/g, '').toLowerCase();
    let word2 = stringB.replace(/\W/g, '').toLowerCase();
    let obj1 = {};
    let obj2 = {};

    if(word1.length !== word2.length){
        return false
    }

    for(let character of word1){
        obj1[character] = obj1[character] + 1 || obj1[character]
    }

    for(let character of word2){
         obj2[character] = obj2[character] + 1 || obj2[character]
    }

    for(let character in obj1){
        if(obj1[character] !== obj2[character]){
            return false
        }
    }

    return true 
}

module.exports = anagrams;

//create a helper function to keep code dry