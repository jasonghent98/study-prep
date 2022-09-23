// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array 
// originally contained  all the numbers from 1 to ‘n’, but due to a data error, one of the numbers 
// got duplicated which also resulted in one number going missing. Find both these numbers.

// [3,1,2,5,2] => [2,4]
// [1,2,3,5,2]

// we can place each number at its correct index
// then we can iterate over the sorted array and verify each num is at its correct position
// if it isnt, then it means we are missing that number. push to array

function findCorruptPair (nums) {
    let i = 0;
    while (i < nums.length) {
        const correctSpot = nums[i] - 1;
        if (nums[i] !== nums[correctSpot]) {
            [nums[i], nums[correctSpot]] = [nums[correctSpot], nums[i]];
        } else i += 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) { //return what should be there (missing), along with the current num (dup)
            return [nums[i], i+1];
        }
    }
    return [-1, -1];
}

console.log(findCorruptPair([4, 1, 2, 4, 6, 3]))