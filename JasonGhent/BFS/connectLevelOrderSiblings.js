
/* 
Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

constraints



ideas:
- traverse tree bfs
- keep a reference to the prevNode, but dont update it at the end of each level processing



complexity:



*/

class TreeNode {
    constructor(val, left = null, right = null, next = null) {
        this.val = val
        this.left = left
        this.right = right
        this.next = next
    }
}

const connectLevelOrderSiblings = (root) => {
    // if null tree
    if (!root) return root
    const queue = [root]
    let prevNode = null
    while (queue.length) {
        let levelLength = queue.length
        while (levelLength--) {
            const currentNode = queue.shift()
            if (prevNode) prevNode.next = currentNode
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
            // move prevNode along the traversal
            prevNode = currentNode
        }
    }
    return root
}


const root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.right = new TreeNode(3)
root1.left.left = new TreeNode(4)
root1.left.right = new TreeNode(5)
root1.right.left = new TreeNode(6)
root1.right.right = new TreeNode(7)

console.log(connectLevelOrderSiblings(root1))