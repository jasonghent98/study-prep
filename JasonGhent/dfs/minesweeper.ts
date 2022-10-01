
type board = string[][]
type click = number[]

const updateBoard = function(board: string[][], click: number[]): string[][] {
    const [row, col] = click
    // if we clicked on M
    const directions = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
    if (board[row][col] === 'M') {
        board[row][col] = 'X'
        return board
    } else if (board[row][col] === 'E') {
        // get the neighboring mines
        const countMines = getNeighbors(board, row, col, directions)
        if (countMines) {
            board[row][col] = countMines.toString()
        } else { // recursively call on all directions until we do find no neighbors
            board[row][col] = 'B'
            for (let [dx, dy] of directions) {
                const newRow = row + dx, newCol = col + dy
                if (withinBounds(board, newRow, newCol) && board[newRow][newCol] !== 'B') updateBoard(board, [newRow, newCol])
            }
        }
    }
    return board
};

const withinBounds = (board: board, row: number, col: number): boolean => row >= 0 && row < board.length && col >= 0 && col < board[row].length

const getNeighbors = (board: board, row: number, col: number, directions: number[][]): number => {
    let countMines: number = 0 
    for (let [dx, dy] of directions) {
        // if neighbor is within bounds and a mine, increment count
        const newRow = dx + row, newCol = dy + col
        if (withinBounds(board, newRow, newCol) && board[newRow][newCol] === 'M') countMines++
    }
    return countMines
}


console.log(updateBoard([["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]],[3,0])) 

/**
 * [
 * ["B","1","E","1","B"],
 * ["B","1","M","1","B"],
 * ["B","1","1","1","B"],
 * ["B","B","B","B","B"]
 * ]
 * 
 */