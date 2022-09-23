// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the 
// values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const levelOrderTraversal = root => {
    if (!root) return [];
    // queue that will hold all of the nodes of a given level. init with the root
    const currentLevelQueue = [root]
    // output var
    const visited = [];
    while (currentLevelQueue.length) {
        // create a new subarray for each level that will hold all of the nodes
        const levelNodes = [];
        // store the length of the queue (length of current level)
        const currentLevelLength = currentLevelQueue.length;
        // repeat logic for each level
        for (let i = 0; i < currentLevelLength; i++) {
            // process the first node in the queue
            const current = currentLevelQueue.shift();
            // push onto currentlevel subarray
            levelNodes.push(current.val);
            if (current.left) currentLevelQueue.push(current.left);
            if (current.right) currentLevelQueue.push(current.right);
        }
        visited.push(levelNodes);
    }
    return visited;
}

            // 10
        // 11     12
    //  14   16  17  19
    // [[10], [11,12], [14,16,17,19]]
const root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(14);
root.left.right = new TreeNode(16);
root.right.left = new TreeNode(17);
root.right.right = new TreeNode(19);

console.log(levelOrderTraversal(root));