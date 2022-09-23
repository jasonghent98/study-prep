/* 

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:





constraints:



ideas:
Thinking in terms of our base case (rowIdx === 0) => [1]... we can build the rest of the triangle based on this

each row will have an array of rowIdx + 1 values


PARAMETERS:
rowIdx, currentRow, targetIdx (an array that will hold our values)

the base case for the recursive function will be when rowidx === targetIdx


1. function that returns the recursive call of the function that will generate the triangle
2. if we havent yet reached the base case, we initialize an array of rowIdx + 1 length
3. iterate over the length of this array
    have two vars (left and right, which will populate the sequence of numbers from left to right for a given row)

    left will be equal to the corresponding idx of the current loop in the context of the currentRow + corresponding idx - 1 || 0 
    right = i + i + 1 || 0 in the currentRow array

    we set these values in the new array and continue iterating in our loop
before the next recursive call, we update our currentRow to be the newRow

complexity:
time: O(rowIdx * longestCol)
space: O(rowIdx * longestCol), where we are actually generating our matrix row by row, + O(rowIdx) for the call stack
*/


const pascalsTriangle = (rowIdx) => {
    return generateTriangle(rowIdx, [1])
}


const generateTriangle = (rowIdx, currentRow) => {
    // the ith row will have i + 1 elements in it... 
    if (currentRow.length - 1 === rowIdx) return currentRow
    // generate a new array that will be passed into the next recursive call
    const newRow = new Array(currentRow.length + 1)
    // generate new values for the newRow
    for (let i = 0; i < newRow.length; i++) {
        const match = (currentRow[i] || 0) + (currentRow[i-1] || 0)
        newRow[i] = match
    }
    return generateTriangle(rowIdx, newRow)
}

console.log(pascalsTriangle(3)) // [1,3,3,1]
console.log(pascalsTriangle(1)) // [1,1]