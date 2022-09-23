function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    targetSum -= root.val
    // leaf node and no match
    if (!root.left && !root.right && targetSum != 0) return false
    // leaf node and match
    if(!root.left && !root.right && targetSum == 0) return true
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};

// iterative

function hasPathSumIterative(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    // init our stack and our curr node to the root
    const stack: any = [[root, root.val]]
    while (stack.length) {
        let [currNode, totalSum] = stack.pop()
        if (currNode.right) stack.push([currNode.right, totalSum + currNode.right.val])
        if (currNode.left) stack.push([currNode.left, totalSum + currNode.left.val])
        if (!currNode.left && !currNode.right && totalSum == targetSum) return true
    }
    return false
}


class TreeNode {
    left: TreeNode | null
    val: number
    right: TreeNode | null
    constructor(val: number, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

console.log(hasPathSum(root, 3)) // true
console.log(hasPathSumIterative(root, 3)) // true

   