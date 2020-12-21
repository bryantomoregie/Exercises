// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    return n < 0 ? -1 * parseInt(n.toString().split('').reverse().join('')) : parseInt(n.toString().split('').reverse().join(''))
}

module.exports = reverseInt;

/*
It looks like I need to turn this into a string, reverse it, then turn it back into an integer
*/
