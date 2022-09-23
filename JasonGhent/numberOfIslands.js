// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.


// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// iterate through our matrix in sequential order (proccess each array in entirety)
// because we return the total amount of islands, we will need a totalIslands var

// we will need to traverse the entire matrix in order to account for all possible instances of islands

// if we encounter a 0, we know we will not have an island, continue;
// if we encounter a 1, we need to figure out if it is a new island or existing
        
//      if we find a 1
//          we can switch its value to 0 to prevent any duplication
//      then we call bfs on the next val

//          we need to implement BFS to find all of its neighboring values to check if they too are 1

// approach 
//      implement a helper bfs function

// Traverse all the neighboring nodes of an island

// O(n) time: O(n) space
const directions = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
]

var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    let totalIslands = 0;

    const totalRows = grid.length;
    const totalColumns = grid[0].length;

    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalColumns; col++) {
            if (grid[row][col] === 1) {
                totalIslands += 1;
                grid[row][col] = 0;
                let queue = [grid[row[col]]];
                while (queue.length) {
                    let current = queue.shift();
                    let currentRow = current[0];
                    let currentCol = current[1];
                    for (let i = 0; i < directions.length; i++) {
                        const currentDir = directions[i];
                        const nextRow = currentRow + currentDir[0];
                        const nextCol = currentCol + currentDir[1];
                        if 
                        (nextRow < 0 || nextRow >= grid.length || 
                        nextCol < 0 || nextCol >= grid[0].length) {
                            continue;
                        } 
                        if (grid[nextRow][nextCol] === 1) {
                            queue.push([nextRow,nextCol]);
                            grid[nextRow][nextCol] = 0;
                        }
                    }
        
                }
            
            }
        }
    }
    return totalIslands;
};