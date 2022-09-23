const tripletClosestToSum = (nums, target) => {
    nums.sort((a,b) => a-b);
    let smallestDiff = Infinity;
    for(let i = 0; i < nums.length - 2; i++) {
        let leftPointer = i + 1;
        console.log('run')
        let rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            let currDiff = target - nums[i] - nums[leftPointer] - nums[rightPointer]      
            if (currDiff === 0) return target;
            if (Math.abs(currDiff) < Math.abs(smallestDiff) || 
            (Math.abs(currDiff) === Math.abs(smallestDiff) && currDiff > smallestDiff)) {
                smallestDiff = currDiff;
            }  

            if (currDiff > 0) leftPointer++;
            else rightPointer--
        }
    }
    console.log(target - smallestDiff);
    return target - smallestDiff;
}

tripletClosestToSum([-3, -1, 1, 2], 1);