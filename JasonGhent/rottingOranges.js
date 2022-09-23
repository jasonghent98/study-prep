// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is 
// impossible, return -1.


const directions = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1]
]

// sequential order to count # of fresh oranges & put rotten oranges into queue
const orangesRotting = function(grid) {
    if (grid.length === 0) return 0;
    const none = 0;
    const fresh = 1;
    const rotten = 2;
    const queue = [];
    let freshOranges = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
           if (grid[row[col] === rotten]) {
               queue.push([row,col]);
           } 
           if (grid[row[col]] === fresh) {
               freshOranges++;
            }
        }
    }
    let currentQueueSize = queue.length;
    let minutes = 0;
    while (queue.length) {
        if (currenQueueSize === 0) {
            minutes++;
            currentQueueSize = queue.length;
        }
        const currentOrange = queue.shift();
        currentQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];
        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentDir[0] + row;
            const nextCol = currentDir[1] + col;
            if (nextRow < 0 || 
                nextRow >= grid.length || 
                nextCol < 0 || 
                nextCol >=grid[0].length) {
                continue;
            }
            if (grid[nextRow][nextCol] === fresh) {
                grid[nextRow][nextCol] = rotten;
                freshOranges--;
                queue.push([nextRow,nextCol]);
            }
        }
    }
    if (freshOranges > 0) {
        return -1;
    } else {
        return minutes;
    }
};