// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const buildMatrix = n => {
    const matrix = new Array(n).fill(0).map(() => new Array(n)); // n * n matrix
    let rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1, count = 1; // vars
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let col = colStart; col <= colEnd; col++) {
            matrix[rowStart][col] = count++;
        }
        for (let row = rowStart + 1; row <= rowEnd; row++) {
            matrix[row][colEnd] = count++;
        }
        for (let col = colEnd - 1; col >= colStart; col--) {
            matrix[rowEnd][col] = count++;
        }
        for (let row = rowEnd - 1; row > rowStart; row--) {
            matrix[row][colStart] = count++;
        }
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }
    return matrix;
}

console.log(buildMatrix(3));