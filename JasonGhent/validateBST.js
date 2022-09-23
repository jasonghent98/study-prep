// the relationship between a node and its children is integral to determining a BST

// a DFS search may be better for this approach
// a BFS search goes at a level order, which doesnt help you with determining if a node is in a correct position relative to parent

// all left nodes must be smaller than the parent; all right must be larger

// constraints:
// are there duplicate vals in the BST? => if you encounter a duplicate, it is NOT a valid BST

// we could run a recursive function if root.left  || root.right !== null

// O(n) time complexity; 
// space: we dont know the structure of the BST so we can't guarantee O(log n)
// space; O(h), where h is the max height of the tree (stack frames)

const dfs = function(node, minValue, maxValue) {
    if (node.val <= minValue || node.val >= maxValue) return false;
//     if node.left and val of any recur calls returns false, return false
    if (node.left) {
        if (!dfs(node.left, minValue, node.val)) return false;
    }
//     if node.right and val of any recur call return false, return false
    if (node.right) {
        if (!dfs(node.right, node.val, maxValue)) return false;
    }
//     if visit entire tree without any dfs calls returning false, tree satisfies all conditions for a valid BST
    return true;
}
const isValidBST = function(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    return dfs(root, -Infinity, Infinity);
};