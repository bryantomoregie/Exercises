// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let newStr = ""; 

    for(let i = str.length - 1; i >= 0; i--){
        debugger;
        newStr += str[i]
    }

    return newStr
}

reverse("Bryant")




//I need to remove the first element of the string and push it to the bottom
/*
I can slice the first letter then concat it to the end.

*/