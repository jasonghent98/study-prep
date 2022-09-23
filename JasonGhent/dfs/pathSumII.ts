class TreeNode {

    val:TreeNode | null
    left:TreeNode | null
    right:TreeNode | null
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left 
        this.right = right
    }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if (!root) return []
    const paths: number[][] = []
    type Node = TreeNode | null
    const dfs = (currPath: number[], currSum: number, root: Node) => {
        if (!root) return []
        // add the current node value to our currSum and append to our currPath
        currSum += root.val
        currPath.push(root.val)
        // if we are at a leaf
        if (!root.left && !root.right && targetSum == currSum) {
            paths.push(currPath.slice())
        }
        // go down left and right subtrees
        dfs(currPath, currSum, root.left)
        // pop off the path
        dfs(currPath, currSum, root.right)
        // once we backtrack, remove the 
        currPath.pop()
    }
    dfs([], 0, root)
    return paths
};

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)

console.log(pathSum(root, 7))