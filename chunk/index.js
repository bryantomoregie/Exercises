// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = [];
    let index = 0;

    while(index < array.length){
        let chunk = array.slice(index, index + size);
        chunked.push(chunk);
        index += size; 
    }

    return chunked
    
}
/*
    let chunked = [];

    for(let number of array){
        let last = chunked[chunked.length - 1]
        if(!last || last.length == size){
            let chunk = [number]
            chunked.push(chunk)
        }else {
            last.push(number)
        }
    }

    return chunked;
*/

module.exports = chunk;

/* 
so when using slice I could just do  take the initial array. Slice the piece of it I need. Push it into the array.
Then jump size so that I can start from there and get that slice. 
Remember slice takes in two argurments. Where to begin and where to end. Include first number, don't include second number. 
*/
