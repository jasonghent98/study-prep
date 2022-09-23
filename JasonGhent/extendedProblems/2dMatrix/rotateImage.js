/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

TIME: O(N^2), where we have to rotate each element in the n x n matrix
SPACE: O(1), done in place
*/
var rotate = function(matrix) {
    // do not return anything. just modify the matrix in place
    // create boundaries
    let l = 0, r = matrix.length - 1
    while (l < r) {
        for (let i = 0; i < r - l; i++) {
             let top = l, bottom = r; // n x n matrix
            // temp variable for top left
            let topLeft = matrix[top][l + i];
            // move bottom left into top left
            matrix[top][l + i] = matrix[bottom - i][l];
            // move bottom right into bottom left
            matrix[bottom - i][l] = matrix[bottom][r - i];
            // move top right into bottom right
            matrix[bottom][r - i] = matrix[top + i][r];
            // move temp var into top right
            matrix[top + i][r] = topLeft;
            
        }
        // shrink the boundaries
        r--;
        l++;
    }
    return matrix;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));