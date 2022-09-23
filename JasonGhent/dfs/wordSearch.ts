function exist(board: string[][], word: string): boolean {
    const rows: number = board.length;
    const cols: number = board[0].length
    for (let r = 0; r < rows; r++) {
        for (let c: number = 0; c < cols; c++) {
            // if the first letter matches, we check to see if this path could result in a match
            if (board[r][c] == word[0]) {
                if (dfs(board, word, new Set(), r, c, 0)) return true
            }
        }
    }
    return false
};

const dfs = (board: string[][], word: string, visited: Set<string>, r: number, c: number, wordIdx: number): boolean => {
    // if out of bounds, already visited, or != corresponding idx in word, return false
    if (outOfBounds(board, r, c) || visited.has(`${r}-${c}`) || word[wordIdx] != board[r][c]) return false
    // if idx == word.length - 1 and its a match after passing the false checks, that means we have a match
    if (wordIdx == word.length - 1 && word[wordIdx] == board[r][c]) return true
    // only one of the calls must return true
    
    // add the curr coordinate to our board and make rec calls
    visited.add(`${r}-${c}`)
    
    // search pruning: if any of these return true, immediately return to prevent unnecessary calls
    if (dfs(board, word, visited, r, c-1, wordIdx+1)) return true
    if (dfs(board, word, visited, r, c+1, wordIdx+1)) return true
    if (dfs(board, word, visited, r-1, c, wordIdx+1)) return true
    if (dfs(board, word, visited, r+1, c, wordIdx+1)) return true
    // unmark as visited before backtracking
    visited.delete(`${r}-${c}`)
    return false
}


const outOfBounds = (board: string[][], r: number, c: number): boolean => r < 0 || r >= board.length || c < 0 || c >= board[0].length 

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED")) //true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")) // false