/* 

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much 
water it can trap after raining.


ex 1:               

                    r
                    l
input: [0,1,3,2,0,3,4,1]

water = 4
leftMax = 3
rightMax = 1

water = Min(leftmax, rightmax) - heights[i]

constraints:


approach:
    *** for any area, we are bound to the smaller of the left max and right max to trap water***
    - we can trap water if the current height we are at is less than the left or right max, depending on which ptr 
    - we process the smaller of the two values to see if it is smaller than its max

complexity:
TIME: O(N)
SPACE: O(1), two ptrs
*/

const trapWater = (height) => {
    let water = 0, left = 0, right = height.length - 1
    // we init our maxes to 0 (we can also set them to start values @ ptrs. it will still work)
    let maxLeft = 0, maxRight = 0
    while (left < right) {
        // process the ptr with smaller value (bound by the smaller )
        if (height[left] < height[right]) {
            // we can trap water at curr position only if current height is less than left max
            if (height[left] < maxLeft) {
                const difference = maxLeft - height[left] 
                water += difference
            }
            // update the left max if our current value is bigger
            maxLeft = Math.max(maxLeft, height[left])
            // move ptr over
            left++
        } else { // value at right is smaller than left
            
            if (height[right] < maxRight) {
                const difference = maxRight - height[right]
                water += difference
            }
            maxRight = Math.max(maxRight, height[right])
            right--
         }
    }
    return water
}


console.log(trapWater([0,1,3,2,0,3,4,1])) // 4
console.log(trapWater([1])) // 0 (loop doesnt even run)
console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1])) // 6