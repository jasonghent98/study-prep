// Given a binary tree, connect each node with its level order successor. The last 
// node of each level should point to a null node.

// same process as level order traversal. init a var that will store the prevNode. if it currently points to a node
// set its next pointer to be the current node being processed. then redefine it to be the current node
class TreeNode {
    constructor (val, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

const connectLevelOrderSiblings = root => {
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
        let prevNode = null;
        // record length of the current level
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const currentNode = queue.shift();
            // if there is a prevNode (more than 1 node in current level, set its next pointer to be currentNode)
            if (prevNode) prevNode.next = currentNode;
            // update the prevNode to be the currentNode;
            prevNode = currentNode;
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
    return root;
}
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
            // 12
    //     7        1
//     9         10   5 
console.log(connectLevelOrderSiblings(root));

