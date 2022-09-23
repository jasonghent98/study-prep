// Given two integer arrays preorder and inorder where preorder is the preorder 
// traversal of a binary tree and inorder is the inorder traversal of the same tree, 
// construct and return the binary tree.

// inputs: 2 arrays (preorder and inorder array)
// output: the root of a tree that has all of its correct children based on the arrays

/* left subtree will be the subarray to the left of the root node in inorder array
    right subtree will be to the right
*/

/* constraints:
    can we always assume we will have values in both arrays?
    will both arrays always contain the same values?
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const constructTree = (preOrder, preStart, preEnd, inOrder, inStart, inEnd) => {
    // done processing once left pointer passes right pointer
    if (preStart > preEnd || inStart > inEnd) return;
    // find root node in inorder arr and make a new node from it
    const root = preOrder[preStart];
    const rootNode = new TreeNode(root);
    // find corresponding index in inorder
    const rootIndex = inOrder.indexOf(root);
    rootNode.left = constructTree(preOrder, preStart+1, preStart+(rootIndex-inStart), inOrder, inStart, rootIndex - 1);
    rootNode.right = constructTree(preOrder, preStart+(rootIndex-inStart)+1, preEnd, inOrder, rootIndex+1, inEnd);
    return rootNode;
}

// helper recursive function that will build the tree from the root, left, and right subarrays in inorder
const buildTree = (preOrder, inOrder) => {
    return constructTree(preOrder, 0, preOrder.length - 1, inOrder, 0, inOrder.length - 1)
}
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
