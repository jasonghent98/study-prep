// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf 
// path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const root = new TreeNode(5);
root.left = new TreeNode(4)
root.left.left = new TreeNode(11)
root.left.left.right = new TreeNode(7)
root.left.left.left = new TreeNode(2)

root.right = new TreeNode(8)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.right.right.right = new TreeNode(1);


const hasPathSum = (root, targetSum) => {
    // helper recursive function
    const dfsBranchSum = (root, currentSum = 0) => {
    if (!root) return false;
    // currentSum will persist to the leaf node
    currentSum += root.val;
    // if we reach a leaf node and the current sum = target sum return true
    if (root.left === null && root.right === null) return currentSum === targetSum
        
    return (dfsBranchSum(root.left, currentSum) || dfsBranchSum(root.right, currentSum));
    }
    return dfsBranchSum(root, 0);
}
console.log(hasPathSum(root, 22));

