/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according 
to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

hashsets are perfect for storing unique values

approach:
make sure no row  & col contains duplicates

divide the indices by 3 (the size of each box) to find the box it belongs to
*/

const isValidSudoku = (board) => {
    const set = new Set();
    for (let r = 0; r < board.length; r++) { // over each row
        for (let c = 0; c < board[r].length; c++) { // each col of each row
            const currentVal = board[r][c];
            if (currentVal === '.') continue; // skip
            const rowBoxIdx = Math.floor(r /3);
            const colBoxIdx = Math.floor(c / 3);
            if (set.has(`${currentVal} found in row ${r}`) ||
               set.has(`${currentVal} found in col ${c}`) ||
               set.has(`${currentVal} found in sub box ${rowBoxIdx} - ${colBoxIdx}`)
               ) return false;
            set.add(`${currentVal} found in row ${r}`)
            set.add(`${currentVal} found in col ${c}`)
            set.add(`${currentVal} found in sub box ${rowBoxIdx} - ${colBoxIdx}`)
        }
    }
    return true;
}