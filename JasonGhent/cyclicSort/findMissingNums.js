// nums fall within the range [1,n]
// arr length is n
    function findMissingNums (nums) {
        let i = 0;
        while (i < nums.length) {
            let correctIndex = nums[i] -1;
            if (nums[i] !== nums[correctIndex]) {
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            } else i += 1;
        }

        const missingNums = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i+1) {
                missingNums.push(i+1);
            }
        }
        return missingNums;
    }
    console.log(findMissingNums([2, 3, 1, 8, 2, 3, 5, 1]));
    