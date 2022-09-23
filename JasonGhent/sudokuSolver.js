// problem not yet completed... finish

const solveBacktrack = function (board, boxes, rows, cols, r, c) {
    if (r === board.length || c === board[0].length) return true;
    else {
        if (board[r][c] === '.') {
            for (let num = 1; num <=9; num++) {
                const num = num.toString();
                board[r][c] = numVal
                const boxId = getBoxId(r,c)
                const box = boxes[boxId]
                const row = rows[r];
                const col = cols[c]
                if (isValid(box, row, col, numVal)) {
                    box[numVal] = true;
                    col[numVal] = true;
                    row[numVal] = true
                    if (c === board[0].length - 1) {
                        if (solveBacktrack(board, boxes, rows, cols, r+1, 0)) {
                            return true;
                        }
                    } else {
                        if (solveBacktrack(board,boxes, rows, cols, r, c+1)) {
                            return true;
                        }
                    }
                    delete box[numVal];
                    delete col[numVal];
                    delete row[numVal];
                }
                board[r][c] = '.'
            }
        } else {
            if (c === board[0].length) {
                if (solveBacktrack(board,boxes,rows,cols, r+1, 0)) {
                    return true;
                }
            } else {

            }
        }
    }
}

const isValid = function (box,row,col, num) {
    if (box[num]||row[num]||col[num]) return false;
    else return true;
}
const solveSudoku = function(board) {
    const n = board.length;
    const boxes = new Array(n), rows = new Array(n), cols = new Array(n);
    for (let i = 0; i < n; i++) {
        boxes[i] = {};
        cols[i] = {};
        rows[i] = {};
    }
    
    for (let r = 0;r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] !== '') {
                const val = board[r][c];
                const boxId = getBoxId(r,c);
                boxes[boxId][val] = true;
                rows[r][val] = true;
                cols[c][val] = true;
                
            }
        }
    }
    solveBacktrack(board, boxes, rows, cols, 0, 0);
};