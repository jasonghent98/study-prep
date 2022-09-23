function findDuplicateNum (nums) {
    let i = 0; 
    while (i < nums.length) {
        if (nums[i] !== i + 1)  { // then its not in the correct spot
            const whereItShouldBe = nums[i] - 1;
            if (nums[i] !== nums[whereItShouldBe]) {
                [nums[i], nums[whereItShouldBe]] = [nums[whereItShouldBe], nums[i]];
            } else return nums[i];
        } else i += 1;
    }
    return -1;
}
console.log(findDuplicateNum([1, 2, 2, 3, 4]));