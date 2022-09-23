// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

// does traversal matter?
//      for each level, we will only be able to process the rightmost nodes
//      unless the rightmost 

// constraints:
// if we have null as a root, return []
// if we only have one root in tree, return [root];

const dfs = (node, currentLevel, result) => {
    if (!node) return;
    if (currentLevel >= result.length) {
        result.push(node.val)
    }
    if (node.right) dfs(node.right, currentLevel + 1, result)
    if (node.left) dfs(node.left, currentLevel + 1, result)
}
const rightSideView = function(root) {
   const result = [];
    dfs(root, 0, result);
    return result;
};