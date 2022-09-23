/* Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf 
path in the given tree. */

/*  

*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function isSequencePresent (root, sequence) {
    return checkBranches(root, sequence, 0);
}

function checkBranches (root, sequence, sequenceIdx) {
    if (!root) return false;
    const sequenceLength = sequence.length;
    if (sequenceIdx >= sequenceLength || root.val !== sequence[sequenceIdx]) return false;
    if (!root.left && !root.right && root.val === sequence[sequenceIdx]) return true;
    return checkBranches(root.left, sequence, sequenceIdx+1) || checkBranches(root.right, sequence, sequenceIdx+1);

}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(isSequencePresent(root, [1,0,7])); // false
console.log(isSequencePresent(root, [1,1,6])); // true
console.log(isSequencePresent(root, [1,0,1])); // true
console.log(isSequencePresent(root, [1,0,2])); // false