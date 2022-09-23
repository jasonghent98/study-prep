// Given a binary tree and a node, find the level order successor of the given node in the tree. The level 
// order successor is the node that appears right after the given node in the level order traversal.

// same approach as a regular level order traversal
// compare each node that is shifting off the queue to the current node
// if they are the same, then we can shift off another node from the queue and return it

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// const levelOrderSuccessor = (root, node) => {
//     if (!root) return null;
//     const queue = [root];
//     while (queue.length) {
//         const levelLength = queue.length;
//         for (let i = 0; i < levelLength; i++) {
//             const current = queue.shift();
//             if (current.left) queue.push(current.left);
//             if (current.right) queue.push(current.right)
//             // if current = null, then the successor will be the next node shifted from the queue
//             if (current === node) return queue.shift();
//         }
//     }
//     return null;
// }

        // 12           root = 10, node = 12            => 14
    // 7      1
//  9       10  5
    // [10, 11.5, 16.5]
    const root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);

    const levelOrderSuccessor = (root, node) => {
        if (!root) return null;
        const queue = [root];
        while (queue.length) {
            const current = queue.shift();
            if (current === node && queue.length) return queue[0];
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return null; // if we find nothing
    }
    
    console.log(levelOrderSuccessor(root, root.left.left));