/* Given a binary tree, find the length of its diameter. The diameter of a tree 
is the number of nodes on the longest path between any two leaf nodes. The diameter of 
a tree may or may not pass through the root.

Note: You can always assume that there are at least two leaf nodes in the given tree. */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const diameterOfBinaryTree = (root) => {
    let diameter = 0
    const treeDiameterDfs = (root) => {
        if (root === null) return 0;
        const leftTreeHeight = treeDiameterDfs(root.left);
        const rightTreeHeight = treeDiameterDfs(root.right);
        diameter = Math.max(diameter,leftTreeHeight + rightTreeHeight);
    // height of the current node will be equal to the maximum of the heights 
        return Math.max(leftTreeHeight, rightTreeHeight) + 1;
    }
    treeDiameterDfs(root)
    return diameter;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);


console.log(diameterOfBinaryTree(root))
