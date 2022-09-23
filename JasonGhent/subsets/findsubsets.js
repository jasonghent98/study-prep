 
function findSubsets (nums) {
    const subsets = [[]];
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const subsetLength = subsets.length;
        for (let j = 0; j < subsetLength; j++) {
            const set1 = subsets[j].slice(0);
            set1.push(currentNumber);
            subsets.push(set1);
        }
    }
    return subsets;
}

console.log(findSubsets([1,2]));