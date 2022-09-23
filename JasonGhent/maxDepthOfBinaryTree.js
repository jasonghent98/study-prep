// traverse the tree in order to find the deepest point (max height) of tree
// Dfs recursive

// constraints:
// number of nodes is between [0,10^4]
// node val's between [-100,100];

// approach
// define a helper recursive function
// if dfs function has been called, we know that we will be at a depth that is 1 greater than the previous call.
// dfs function should have a currentDepth parameter that will increase by 1 after each recursive call
// maxHeight var will be updated to be the max of the currHeight, maxHeight

// base case
// if root == null, return currentHeight


const maxDepth = function(root) {
    let maxDepth = 0;
    const DFS = (root, maxDepth) => {
        if (root === null) return maxDepth;
        maxDepth += 1;
        return Math.max(DFS(root.left, maxDepth), DFS(root.right, maxDepth));
    }
    return DFS(root, maxDepth);
};