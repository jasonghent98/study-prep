// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as 
// the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

//             5
//     6               8
// 7      11        4       10, p = 8, q = 4

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findLowestCommonAncestor = (root, p, q) => {
    if (!root) return root;
    if (root.val === p || root.val === q) return root;
    // search for p and q recursively in each branch of the tree
    const checkLeft = findLowestCommonAncestor(root.left, p, q);
    const checkRight = findLowestCommonAncestor(root.right, p, q);
    if (checkLeft && checkRight) return root;
    if (checkLeft) return checkLeft;
    if (checkRight) return checkRight;
}
const root = new TreeNode(5);
root.left = new TreeNode(6)
root.left.left = new TreeNode(7)
root.left.right = new TreeNode(11)
root.right = new TreeNode(8)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(10);

console.log(findLowestCommonAncestor(root, 8, 4));
