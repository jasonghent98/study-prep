/* 

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to 
the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

constraints:
- beginnning and end can be obstacles


ideas:
- bottom-up dp
- fill the bottom row and rightmost col with number of ways to get to target


time: O(N * M), where we have to traverse the entire grid to compute each subproblem building up to the larger problem
space: O(1), modifying the grid in place
*/

const findUniquePaths = (grid) => {
    const rows = grid.length, cols = grid[0].length
    // cant reach the end if beginning or end is blocked
    if (grid[0][0] || grid[rows-1][cols-1]) return 0
    // iterate over the bottom row and check if there are valid paths
    let obstacle = false
    for (let col = cols - 1; col >= 0; col--) {
        if (obstacle || grid[rows-1][col] === 1) {
            obstacle =  true
            grid[rows-1][col] = 0 // there are no ways to reach the end from an obstacle or past this point going left
        } else grid[rows-1][col] = 1 // valid path
    }

    // rightmost col and check the same             ** WATCH OUT FOR RECOUNTING THE BOTTOM RIGHT **
    obstacle = false
    for (let row = rows - 2; row >= 0; row--) {
        if (obstacle || grid[row][cols-1] === 1) {
            obstacle = true
            grid[row][cols-1] = 0 // no valid paths including and past this point
        } else grid[row][cols-1] = 1 // valid path 
    }

    // iterate over the remaining cells and build on the base cases. Watch out for case where the current cell we're processing is an obstacle
    for (let row = rows - 2; row >= 0; row--) {
        for (let col = cols - 2; col >= 0; col--) {
            // if we are at obstacle (current is 1 as it hasnt been flipped before and first time visiting)
            if (grid[row][col] === 1) {
                grid[row][col] = 0
                continue
            }
            // if we are at an open cell, take the cell to the right and beneath to compute the total ways to this cell
            const bottom = grid[row+1][col]
            const right = grid[row][col+1]
            grid[row][col] = bottom + right
        }
    }
    return grid[0][0] // the origin will contain our answer
}


console.log(findUniquePaths([[0,0,0], [0,1,0], [0,0,0]])) // 2 
console.log(findUniquePaths([[0,1],[0,0]])) // 1