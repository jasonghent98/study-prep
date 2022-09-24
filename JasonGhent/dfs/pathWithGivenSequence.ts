/*
 Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.\


 constraints:
    - must be a root to leaf path
    - 


approach:
    - dfs while keeping a stack, representing the current root to leaf path
    - if at any point the number at the sequence idx != the most recently added number to our path, we should backtrack, as this will not lead to a path
    - if we reach a leaf node after verifying the above conditions, we will return true as we have found a path



our rec function needs the following params:
    - seq idx to compare to the given root node .val
    - root 
*/


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: number, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

const hasGivenSequence = (numberSequence: number[], root: TreeNode | null): boolean => {
    if (!root) return false
    const checkRec = (seqIdx: number, root: TreeNode | null): boolean => {
        if (numberSequence[seqIdx] != root?.val) return false
        // if at a leaf, and it is the last idx in sequence and it is a match
        if ((!root?.left && !root?.right) && (seqIdx == numberSequence.length - 1) && (numberSequence[seqIdx] == root.val)) return true
        // if we make it here, we can make new rec calls while incrementing our seqIdx: the goal is to reach a leaf node and return either f or t
        return checkRec(seqIdx+1, root?.left) || checkRec(seqIdx+1, root?.right)
    }
    return checkRec(0, root)
}



const root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(9)


console.log(hasGivenSequence([1,9,9], root)) // true
console.log(hasGivenSequence([1,9,2], root)) // true
console.log(hasGivenSequence([1,9,4], root)) // false

