function inOrderTraversal (root) {
    let inOrder = [];
    function dfs (root) {
        if (!root) return;
        dfs(root.left);
        inOrder.push(root.value);
        dfs(root.right);
        return inOrder;
    }
    dfs(root);
    return inOrder;
}


class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inOrderTraversal(root)); // [1,3,2]