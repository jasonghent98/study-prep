const findLowestCommonAncestor = (root, p, q) => {
    let current = root;
    while (current) {
        if (p.val > current.val && q.val > current.val) current = current.right;
        else if (p.val < current.val && q < current.val) current = current.left;
        else return current;
    }
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);

console.log(findLowestCommonAncestor(root, new TreeNode(2), new TreeNode(8)));