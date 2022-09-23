// Given a binary tree, connect each node with its level order successor. The last node of each 
// level should point to the first node of the next level.

// very similar problem to connecting each node to its successor, except that we need to connect the last node of each level to the 
// first node of the next level. the last node of the last level will point to null

// instead of redefining prevNode to be null after each iteration, just persist it! Simple
class TreeNode {
    constructor (val, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}
const connectAllLevelOrderSiblings = (root) => {
    if (!root) return root;
    const queue = [root];
    // init prevnode outside of loop. will persist through levels
    let prevNode = null;
    while (queue.length) {
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const currentNode = queue.shift();
            if (prevNode) prevNode.right = currentNode;
            prevNode = currentNode; // move the prevNode along the level after every iteration
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
console.log(connectAllLevelOrderSiblings(root));