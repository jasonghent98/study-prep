var spiralMatrixIII = function(R, C, r0, c0) {
    // bounderies
    let top = r0 - 1;
    let bottom = r0 + 1;
    let left = c0 - 1;
    let right = c0 + 1;
    
    let i = r0; // individual row
    let j = c0; // individual col
    
    const result = [];
    
    // checks if a coordinate is within the matrix
    function isWithInMatrix(row, col) {
        return row >= 0 && row < R && col >= 0 && col < C 
    } 
    
    while(result.length < R*C) { // while we havent placed all numbers in output
        
        while(j < right) {
            if(isWithInMatrix(i, j)) result.push([i, j]);
            j++;
        }
        right++;
        
        while(i < bottom) {
            if(isWithInMatrix(i, j)) result.push([i, j]);
            i++;
        }
        bottom++;
        
        while(j > left) {
            if(isWithInMatrix(i, j)) result.push([i, j]);
            j--;
        }
        left--;
        
        while(i > top) {
            if(isWithInMatrix(i, j)) result.push([i, j]);
            i--;
        }
        top--;
    }
    return result;    
};

console.log(spiralMatrixIII(1, 4, 0, 0)); // [[0,0], [0,1], [0,2], [0,3]]