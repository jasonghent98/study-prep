/* Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of 
all the node values of each path equals ‘S’. Please note that the paths can start or end at 
any node but all paths must follow direction from parent to child (top to bottom). */

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // const findPaths = (root, s) => {
  //     const findPathsDfs = (root,s, stackPath, count = 0) => {
  //       if (!root) return 0;
  //       let sumPath = 0;
  //       stackPath.push(root.val);
  //       for (let i = stackPath.length - 1; i >=0; i--) {
  //           sumPath += stackPath[i];
  //           if (sumPath === s) count++;
  //       }
  //       // both recursive calls will return values when you've reached a leaf
  //       count += findPathsDfs(root.left, s, stackPath);
  //       count += findPathsDfs(root.right,s, stackPath);
  //       // the function that generated the topmost node in the stack will now be popped off
  //       stackPath.pop();
  //       return count;
  //     }
  //     return findPathsDfs(root, s, []);
  // }

  const findPaths = (root, targetSum) => {

    const checkBranches = (root, targetSum, stackPath, total = 0) => {
        if (!root) return 0;
        stackPath.push(root.val);
        let currentPathSum = 0;
        for (let i = stackPath.length - 1; i >= 0; i--) {
            currentPathSum += stackPath[i];
            if (currentPathSum === targetSum) total++;
        }
        total += checkBranches(root.left, targetSum, stackPath);
        total += checkBranches(root.right, targetSum, stackPath);
        stackPath.pop();
        return total;
        
    }
    return checkBranches(root, targetSum, []);
}
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
//   console.log(`Tree has paths: ${count_paths(root, 11)}`);

  console.log(findPaths(root, 11));