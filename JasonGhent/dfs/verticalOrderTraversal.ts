/*
Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.

*/


var verticalTraversal = function(root) {
    if (!root) return []
    // [[x1, y1, value], ....]
    const traversal = getTraversal(root, 0, 0, [])
    
    
    
    // sort by the following order of importance:
	//  1. x - coordinate
	//  2. y - coordinate precedence given to higher value
	//  3. node val in ascending order
	
    traversal.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
    
    const map = new Map();
    
    for (const [x, y, val] of traversal) {
        if (!map.has(x)) map.set(x, []);
        map.get(x).push(val);
    }
    
    return [...map.values()];
    
};

// regular tree dfs traversal
const getTraversal = (root, x, y, coordinates) => {
    if (!root) return coordinates
    coordinates.push([x, y, root.val])
    coordinates = getTraversal(root.left, x-1, y-1, coordinates)
    // will pass in the coordinates from the previous call into the coordinates into the next rec call
    coordinates = getTraversal(root.right, x+1, y-1, coordinates)
    // and finally return the aggregate when backtracking
    return coordinates
}
