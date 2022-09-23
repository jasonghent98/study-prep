// time: O(2^n * n logn) => n log n for sorting input arr
// space: O(2^n * n)

function subsetsWithDuplicates (nums) {
    nums.sort((a,b) => a - b); // sort array so all duplicates will be next to each other
    const subsets = [[]]; // init output subsets arry
    let startIdx = 0, endIdx = 0;
    for (let i = 0; i < nums.length; i++) { // process all nums
        startIdx = 0;   // init to 0
        if (i > 0 && nums[i] === nums[i-1]) { // update startIdx if we are on a dup
            startIdx = endIdx + 1;
        }
        endIdx = subsets.length - 1; // set to be last idx of subset
        for (let j = startIdx; j < endIdx + 1; j++) { // j will either be the beginning of subset || value after dup
            const set1 = subsets[j].slice(0);
            set1.push(nums[i]);
            subsets.push(set1);
        }
    }
    return subsets;
}

console.log(subsetsWithDuplicates([1,3,3]));