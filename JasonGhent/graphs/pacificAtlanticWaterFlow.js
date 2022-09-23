/* 



            P
    P     MATRIX      A
            A


*/

var findCoordinates = function(heights) {
    const rows = heights.length, cols = heights[0].length
    // sets to keep track of accessible cells from oceans
    const atlanticSet = new Set(), pacificSet = new Set();
    // top and bottom
    for (let col = 0; col < cols; col++) {
        // starting at first row (pacific)
        dfs(heights, 0, col, heights[0][col], pacificSet)
        // at last row (atlantic)
        dfs(heights, rows-1, col, heights[rows-1][col], atlanticSet)
    }
    
    // left and right
    for (let row = 0; row < rows; row++) {
        // left hand side
        dfs(heights, row, 0, heights[row][0], pacificSet)
        // right hand side
        dfs(heights, row, cols-1, heights[row][cols-1], atlanticSet)
    }
    
    // iterate over the grid once and place any that exist in both in output
    const output = []
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (atlanticSet.has(`${row}-${col}`) && pacificSet.has(`${row}-${col}`)) output.push([row, col])
        }
    }
    return output;
}

const dfs = (heights, row, col, previous, visited) => {
    // we arent within bounds or the current cell is < previous
    if (row < 0 || row >= heights.length || 
        col < 0 || col >= heights[0].length ||
        heights[row][col] < previous ||
        visited.has(`${row}-${col}`)
       ) return
    // mark as accessible from ocean
    visited.add(`${row}-${col}`)
    // left
    dfs(heights, row, col-1, heights[row][col], visited)
    // right
    dfs(heights, row, col+1, heights[row][col], visited)
    // up
    dfs(heights, row-1, col, heights[row][col], visited)
    // down
    dfs(heights, row+1, col, heights[row][col], visited)
    
}

console.log(findCoordinates([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))
    // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]