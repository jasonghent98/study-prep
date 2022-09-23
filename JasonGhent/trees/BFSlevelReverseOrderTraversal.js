// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the 
// lowest level comes first. You should populate the values of all nodes in 
// each level from left to right in separate sub-arrays.

// same approach as a regular top-down levelOrderTraversal...
// we still need a queue to process the nodes from each level
// output array
// store the length of the queue before processing the queue each time to process only the amount of nodes for a given level
// still shifting from queue and pushing onto the subarray
// only difference is you are unshifting the subarray after processing each level instead of pushing it, so the lowest level 
// end up being the beginning of the output array and the root ends up at the end

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const reverseLevelOrderTraversal = root => {
    if (!root) return [];
    // queue for processing each level
    const queue = [root];
    //output arr
    const visited = [];
    while (queue.length) {
        //record the length of the queue (number of nodes at current level)
        const levelLength = queue.length;
        //init a subarray to push all currentlevel nodes onto
        const levelNodes = [];
        // process all the nodes at the current level in the queue
        for (let i = 0; i < levelLength; i++) {
            // remove from the beginning of queue
            const current = queue.shift();
            // push onto the subarray (still processing from left to right)
            levelNodes.push(current.val);
            // add to queue for processing for the next level
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        visited.unshift(levelNodes);
    }
    return visited;
}
            // 10
        // 11     12
    //  14   16  17  19
    // [[14,16,17,19], [11,12], [10]]
    const root = new TreeNode(10);
    root.left = new TreeNode(11);
    root.right = new TreeNode(12);
    root.left.left = new TreeNode(14);
    root.left.right = new TreeNode(16);
    root.right.left = new TreeNode(17);
    root.right.right = new TreeNode(19);
    
    console.log(reverseLevelOrderTraversal(root));