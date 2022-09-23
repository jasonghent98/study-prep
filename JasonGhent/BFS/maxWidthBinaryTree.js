/* 

Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will in the range of a 32-bit signed integer.




constraints:




approach:




complexity:




*/
/*
const findMaxWidth = root => {
    if (!root) return 0
    // queue will hold the node and the appropriate indx
    const queue = [[root, 0]]
    let maxWidth =  1
    while (queue.length) {
        const levelLength = queue.length
        // set the minIdx to the first ndoe in the level so that we can prevent overflow
        let minIdx = queue[0][1]
        let start = 0, end = 0
        for (let i = 0; i < levelLength; i++) {
            // process the current node
            const [currentNode, idx] = queue.shift()
            // if we are at the first or last node in level, mark variables to record width after processing level
            if (i === 0) start = minIdx
            if (i === levelLength - 1) end = idx  
            // compute the indices for the children if there are any
            const leftIdx = (idx * 2 + 1) - minIdx
            const rightIdx = (idx * 2 + 2) - minIdx
            if (currentNode.left) queue.push([currentNode.left, leftIdx])
            if (currentNode.right) queue.push([currentNode.right, rightIdx])
        }
        maxWidth = Math.max(maxWidth, end - start + 1)
    }
    return maxWidth
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}



const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.right = new TreeNode(7)

console.log(findMaxWidth(null)) // 0
console.log(findMaxWidth(root)) // 4


*/







var compress = function(chars) {
    if (!chars.length) return 0;
    let j = 0;
    let cur = chars[0];
    let counter = 0;
    for (let i = 0; i <= chars.length; i++) {
      if (chars[i] === cur) {
        counter++;
      } else {
        chars[j] = cur;
        if (counter > 1) {
          const s = counter.toString();
          for (let k = 0; k < s.length; k++) chars[++j] = s[k];
        }
        j++;
        cur = chars[i];
        counter = 1;
      }
    }
    return j;
  };

  console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))