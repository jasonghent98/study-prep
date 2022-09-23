class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// time: O(2^n) different structurally unique trees
// space: O(2^n) different unique trees we will have to store
const findAllStructurallyUniqueTrees = (n) => {
    if (n <= 1) return [];
    return findAllTrees(1, n);
}

const findAllTrees = (start, end) => {
    let result = [];
    if (start > end) {
        result.push(null);
        return result;
    } else {
        for (let i = start; i < end + 1; i++) {
            const leftSubTrees = findAllTrees(start, i - 1);
            const rightSubTrees = findAllTrees(i+1, end);
            for (let p = 0; p < leftSubTrees.length; p++) {
                for (let q = 0; q < rightSubTrees.length; q++) {
                    const root = new TreeNode(i, leftSubTrees[p], rightSubTrees[q]);
                    result.push(root);
                }
            }
        }
    }
    return result;
}

console.log(findAllStructurallyUniqueTrees(6));