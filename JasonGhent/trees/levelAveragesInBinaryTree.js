// Given a binary tree, populate an array to represent the averages of all of its levels.

// same approach as level order traversal
// instead of placing each level into a subarray. we need to keep a running sum for each level, and find the average
// push the average onto the output array
// still need a queue to process each level at once before moving to the next
// same edge case, just return 0 if root is null (0 average)
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const levelAverages = root => {
    if (!root) return 0;
    const queue = [root];
    const averageOfLevels = [];
    while (queue.length) {
        // init sum to 0 var after each iteration for a new level
        let sum = 0;
        // record the length of the queue (number of the nodes at current level)
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const current = queue.shift();
            sum += current.val;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        //compute average
        let average = sum / levelLength;
        averageOfLevels.push(average);
    }
    return averageOfLevels;
}

        // 10
    // 11     12
//  14   16  17  19
    // [10, 11.5, 16.5]
    const root = new TreeNode(10);
    root.left = new TreeNode(11);
    root.right = new TreeNode(12);
    root.left.left = new TreeNode(14);
    root.left.right = new TreeNode(16);
    root.right.left = new TreeNode(17);
    root.right.right = new TreeNode(19);
    
    console.log(levelAverages(root));