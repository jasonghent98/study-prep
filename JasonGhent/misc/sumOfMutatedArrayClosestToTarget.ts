/*
approach:
    - sort the array in increasing order
    - iterate over the array
    - compute the number we would need at each position in order to get as close to target as possible
        Math.floor((target - prefixSum) / length of array - current idx)
    - if our current number is >= this number, we immediately return this number
    - otherwise, we add the current number to our prefix sum variable and move to the next iteration



TIME: O(N LOG N)
SPACE: O(LOG N), (required for merge sort recursive stack)
*/


function findBestValue(arr: number[], target: number): number {
    arr.sort((a,b) => a - b)
    let prefixSum: number = 0
    for (let i: number = 0; i < arr.length; i++) {
        const numberWeNeed: number = Math.round((target - prefixSum) / (arr.length - i))
        if (arr[i] >= numberWeNeed) return numberWeNeed /* every number after this point will need to 
        be converted to this number, in order to get as close as possible to our target 
        if curr number isnt larger or equal to number we need, we wouldnt need to change the current number */
        prefixSum += arr[i]
    }
    // if we break out of the loop, we return the last number in the array
    return arr[arr.length - 1]
};

console.log(findBestValue([2,3,5], 10)) // 5