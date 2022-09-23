function findMissingNum (nums) {
    let i = 0;
    while (i < nums.length) {
        // where t
        const correctIdx = nums[i];
        if (nums[i] < nums.length && nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        } else i++;
    }

    // iterate over the sorted array and find the discrepancy
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
}
console.log(findMissingNum([4,2,3,0])); // 1
console.log(findMissingNum([0,2,1,4])); // 3