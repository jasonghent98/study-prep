class NumMatrix {
    prefixMat: number[][]
    constructor(matrix: number[][]) {
        const rows = matrix.length, cols = matrix[0].length
        // init the prefix matrix 
        this.prefixMat = [...Array(rows+1)].map(() => Array(cols+1).fill(0))
        // generate the prefix sums 
        for (let r = 0; r < rows; r++) {
            let prefixRow: number = 0
            for (let c = 0; c < cols; c++) {
                prefixRow += matrix[r][c]
                const above = this.prefixMat[r][c+1]
                // take into account for the offset in prefixmat
                this.prefixMat[r+1][c+1] = above + prefixRow
            }
        }
    }
    sumRegion(r1: number, c1: number, r2: number, c2: number): number {
        // handle the offsets, bc we will be querying the prefixMat
        r1++, r2++, c1++, c2++
        const fromBeginningToBottomRight: number = this.prefixMat[r2][c2]
        const leftOfArea: number = this.prefixMat[r2][c1-1]
        const aboveArea: number = this.prefixMat[r1-1][c2]
        // we are counting the top left prefix sum twice.. so we need to subtract it 
        return fromBeginningToBottomRight - leftOfArea - aboveArea + this.prefixMat[r1-1][c1-1]
    }
}

const matrix = new NumMatrix([
    [3,4,5],
    [6,7,8],
    [9,10,11]
])
console.log(matrix.sumRegion(1,1,2,2)) // 36