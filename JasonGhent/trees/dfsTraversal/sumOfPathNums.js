// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf 
// path will represent a number. Find the total sum of all the numbers represented by all paths.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
 }

function findRootToLeafPathNums (root) {
    return sumOfPathNums(root, 0);
}

function sumOfPathNums (root, pathSum) {
    if (!root) return 0;
    pathSum = 10 * pathSum + root.val;
    if (!root.left && !root.right) return pathSum;
    return sumOfPathNums(root.left, pathSum) + sumOfPathNums(root.right, pathSum);
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(findRootToLeafPathNums(root))


