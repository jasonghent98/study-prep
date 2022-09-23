// Given an array of unsorted numbers and a target number, 
// find all unique quadruplets in it, whose sum is equal to the target number.

// constraints
    // nums must be of unique index
    // sum must equal target Number
    // nums can include all real numbers

    // Input: [4, 1, 2, -1, 1, -3], target=1
    // => [[-3,1,-1,4], [-3,1,1,2]]

    // [2, 0, -1, 1, -2, 2], target=2
    // => [[2,0,-1,1], [-2,2,0,2]]

    // output => an array of quadruplets that sum to target

    // approach
    // define initial function

    // sort the array 
    // 2 pointers
    //      within the 2nd nested pointer, init a left pointer and a right pointer

    function findPair(nums, target, i, j, result) {
        let left = j + 1;
        let right = nums.length - 1;
        while (left < right) {
            let currentSum = nums[i] + nums[j] + nums[left] + nums[right];
            if (currentSum === target) {
                result.push([nums[i], nums[j], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
        return result;
    }
    function quadrupleSumToTarget (nums, target) {
        nums.sort((a,b) => a - b);
        let quadruplets = [];
        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j-1]) continue;
                findPair(nums, target, i, j, quadruplets);
            }
        }
        return quadruplets;
    }

    console.log(quadrupleSumToTarget([4, 1, 2, -1, 1, -3], 1));