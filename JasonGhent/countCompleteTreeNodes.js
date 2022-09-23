// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a 
// complete binary tree, and all nodes in the last level are as far left as possible. It can have 
// between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

// DID NOT SOLVE BY MYSELF. BREAK IT DOWN AND TRY AGAIN

const getTreeHeight = root => {
    let height = 0;
    while (root.left !== null) {
        height++;
        root = root.left;
    }
    return height;
}

const nodeExists = (index, height, node) => {
    let left = 0, right = Math.pow(2, height) -1, count = 0;
    while (count < height) {
        let middle = Math.ceil((left + right) / 2);
        if (index >= middle) {
            node = node.right;
            left = middle
        } else {
            node = node.left
            right = middle - 1;
        }
        count++;
    }
    return node !== null;
}
var countNodes = function(root) {
    if (!root) return 0;
    const height = getTreeHeight(root);
    if (height === 0) return 1;
    const upperCount = Math.pow(2,height) -1;
    let left = 0, right = upperCount;
    while (left<right) {
        let indexToFind = Math.ceil((left+right)/2);
        if(nodeExists(indexToFind, height, root)) {
            left = indexToFind;
        } else {
//             node does not exist at the last level at spec index
            right = indexToFind -1;
        }
    }
    return upperCount + left + 1;
};