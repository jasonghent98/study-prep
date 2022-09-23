// approach
// cyclically sort the array because of its constraints
// if the current num is not in the proper position
    // if the current num !== the num at where its supposed to be, swap
    // else, push the duplicate onto an output arr

// return the arr at the end. whether it has duplicates or not

function findDuplicateNums (nums) {
    let i = 0; 
    while (i < nums.length) {
        const whereItShouldBe = nums[i] - 1;
        if (nums[i] !== nums[whereItShouldBe]) {
            [nums[i], nums[whereItShouldBe]] = [nums[whereItShouldBe], nums[i]];
        } else i += 1;
    }
    const duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            duplicates.push(nums[i]);
        }
    }
    return duplicates;
}

console.log(findDuplicateNums([3, 4, 4, 5, 5]))