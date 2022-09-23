// function permutations (nums) {
//     const result = [];
//     findPermutationsRecursive(nums, 0, [], result);
//     return result;
// }

// function findPermutationsRecursive (nums, index, currPermutation, result) {
//     if (index === nums.length) {
//         result.push(currPermutation);
//         return;
//     } else {
//         for (let i = 0; i < currPermutation.length + 1; i++) {
//             let newPermutation = currPermutation.slice(0);
//             newPermutation.splice(i, 0, nums[index]);
//             findPermutationsRecursive(nums, index + 1, newPermutation, result);
//         }
//     }
// }

function findPermutations (nums) {
    const result = []; // ouput to hold permutations
    findAllPermutations(nums, 0, [], result);
    return result;
  }
  
  function findAllPermutations (nums, idx, currentPermutation, result) {
    if (idx === nums.length) { // base case
      result.push(currentPermutation);
      return;
    } else { // recursively find permutations based on currentPerm
      for (let i = 0; i < currentPermutation.length + 1; i++) {
        let newPermutation = currentPermutation.slice(0); // clone
        newPermutation.splice(i, 0, nums[idx]);
        findAllPermutations(nums, idx + 1, newPermutation, result);
      }
    }
  }

console.log(findPermutations([1,2,3]))