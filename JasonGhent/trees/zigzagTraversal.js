// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the 
// values of all nodes of the first level from left to right, then right to left for the next level and keep 
// alternating in the same manner for the following levels.

// same approach as regular pre order traversal, but we will alternate the way in which the nodes are pushed onto our subarray, 
// maybe like some variable or number that will tell us to either push or unshift the values from the queue onto the subarray
// top-down traversal will require us to push each subarray onto the output array after processing each level
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const zigzagTraversal = root => {
    if (!root) return [];
    // queue to process elements from tree at each level
    const queue = [root];
    const visited = [];
    let level = 0;
    while (queue.length) {
        // records the length of the queue, which will hold all of the nodes for each level
        const levelLength = queue.length;
        const levelNodes = [];
        for (let i = 0; i < levelLength; i++) {
            const current = queue.shift();
            // alternate the way in which the nodes are placed in subarray
            if (level % 2 !== 0) levelNodes.unshift(current.val);
            else levelNodes.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        // to alternate the order of the next level, increment level by 1
        level += 1;
        visited.push(levelNodes); // push always because we are visited top-down (bottommost level will be at the end of array)
    }
    return visited;
}


            // 10
        // 11     12
    //  14   16  17  19
    // [[10], [12,11], [14,16,17,19]]
    const root = new TreeNode(10);
    root.left = new TreeNode(11);
    root.right = new TreeNode(12);
    root.left.left = new TreeNode(14);
    root.left.right = new TreeNode(16);
    root.right.left = new TreeNode(17);
    root.right.right = new TreeNode(19);
    
    console.log(zigzagTraversal(root));