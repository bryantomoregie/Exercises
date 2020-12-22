// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = [];

    for(let i = 0; i < n; i++){
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while(startColumn <= endColumn && startRow <= endRow){
        // top row
        for(let i = startColumn; i <= endColumn; i++){
            results[startRow][i] = counter;
            counter++
        }

        startRow++;

        //right column
        for(let i = startRow; i <= endRow; i++){
            results[i][endColumn] = counter;
            counter++
        }

        endColumn--

        //bottom row
        for(let i = endColumn; i >= startColumn; i--){
            results[endRow][i] = counter;
            counter++
        }

        endRow--;

        // start column
        for(let i = endRow; i>= startRow; i--){
            results[i][startColumn] = counter;
            counter++
        }

        startColumn++
    }

    return results 
}

module.exports = matrix;

/*
    In the first for loop, we are populating the very first row. 
    We have our starting column, which equals 0 and our end column that equals 2
    we are looping thru this for loop 3 times
    Each time we are steping into the next index of the first array in the 2d array and putting the index in there. Next we will do the side?

    We incrememnt the start row, which means we will be beginning on the 2 row, populating it?

    In the next for loop we are now populating the right column, so we are using the index of 2 (inthis case) and and the end column index to populate
    We will increment i and then populate the last row. This will fill the entire right column. Im snaking my way around!

    Because we have completed the current end column, or the last column. Now we need to decrement the endColumn. Then repeat the two for loops for the other two sides.



*/