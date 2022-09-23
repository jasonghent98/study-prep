// breadth first search of tree
// init an array that will keep track of level order traversal of nodes visited

// when removing an element from the queue, increment the counter++;

// queue = []
// res = [3,9,20,15,7]

// runtime: O(n): space: O(n)

var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length > 0) {
        let length = queue.length, count = 0;
        const currentLevelValues = [];
        while (count < length) {
            let current = queue.shift();
            currentLevelValues.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            count++;
        }
        res.push(currentLevelValues)
    }
    return res;
};