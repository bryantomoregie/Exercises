// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    let max = 0;
    let letter = "";

    for(let char of str){
        obj[char] = obj[char] + 1 || 1;
    }
    debugger;

    for(let char in obj){
        if(obj[char] > max){
            max = obj[char];
            letter = char;
        }
    }

return letter

}

maxChar("Hello World")

module.exports = maxChar;

/*
create an object 
*/
