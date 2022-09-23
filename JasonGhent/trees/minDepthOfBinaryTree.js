// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path 
// from the root node to the nearest leaf node.

// level order traversal approach
// update the minDepth var whenever we encounter a leaf (a node that doesnt have children)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// O(n) time comlexity, where in the worst case the leaf node is at the bottommost level
// O(n) space, where at the worst case we place n/2 nodes in our queue at once (bottommost level)
const minDepthOfBinaryTree = root => {
    if (!root) return 0;
    const queue = [root];
    // minDepth var
    let minDepth = 0;
    while (queue.length) {
        minDepth += 1;
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const current = queue.shift();
            // return the minDepth of the first instance of a leaf node
            if (!current.left && !current.right) return minDepth;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
}

            // 12
        // 7       1
    //  9       10    5
    //       11
// => 3
    const root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right  = new TreeNode(5);
    root.right.left.left = new TreeNode(11);

    console.log(minDepthOfBinaryTree(root));
