
function findSmallestMissingNum (nums) {
    let i = 0;
    while (i < nums.length) {
        const correctPosition = nums[i] - 1;
        if (nums[i] > 0 && nums[i] !== nums[correctPosition]) {
        [nums[i], nums[correctPosition]] = [nums[correctPosition], nums[i]];
        } else i += 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i+1;
    }
    return null;
}

// console.log(findSmallestMissingNum([3, 4, 1, 5, 2]))