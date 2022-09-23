class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const maxPathSum = function(root) {
    let globalMaxSum = -Infinity;
    const findLargestSum = (root) => {
        if (!root) return 0; // base case
        let leftMaxSum = findLargestSum(root.left);
        let rightMaxSum = findLargestSum(root.right);
        // reached a leaf
        leftMaxSum = Math.max(leftMaxSum, 0);
        rightMaxSum = Math.max(rightMaxSum, 0);
        let localMaxSum = leftMaxSum + rightMaxSum + root.val;
        globalMaxSum = Math.max(localMaxSum, globalMaxSum);
        return Math.max(leftMaxSum, rightMaxSum) + root.val;
    }
    findLargestSum(root); // recursive call
    return globalMaxSum;
};


let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(maxPathSum(root));

/*  
let root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(maxPathSum(root));
*/