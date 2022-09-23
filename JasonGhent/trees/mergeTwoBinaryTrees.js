/* 
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are
overlapped while the others are not. You need to merge the two trees into a 
new binary tree. The merge rule is that if two nodes overlap, then sum node 
values up as the new value of the merged node. Otherwise, the NOT null node will be 
used as the node of the new tree. Return the merged tree.

Note: The merging process must start from the root nodes of both trees.


*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const mergeTwoBinaryTrees = (root1, root2) => { 
    // no merging necessary
    if (!root1 && !root2) return null
    // if just the 2 exists
    if (!root1) return root2
    // if just 1 exists
    if (!root2) return root1
    // both roots exist at this point
    const sum = root1.val + root2.val
    const newNode = new TreeNode(sum)
    newNode.left = mergeTwoBinaryTrees(root1.left, root2.left)
    newNode.right = mergeTwoBinaryTrees(root1.right, root2.right) 
    return newNode
}

const tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.left.left = new TreeNode(3)

const tree2 = new TreeNode(1)
tree2.right = new TreeNode(2)
tree2.right.right = new TreeNode(3)

console.log(mergeTwoBinaryTrees(tree1, tree2)) // 