// Given the root of a binary tree, invert the tree, and return its root.


const invertTree = root => {
    if (!root) return null;
    const leftSubTree = invertTree(root.left);
    const rightSubTree = invertTree(root.right);
    root.left = rightSubTree;
    root.right = leftSubTree;
    return root;
}