// input -> unsorted array of numbers (heights)
// output => the maximum amount of water the container can store (length x Height)

// constraints => 
//      n == height.length
//      2 <= n <= 105
//      0 <= height[i] <= 104 (all numbers are positive)
//      you cannot use the sides of the graph as walls to hold water
//      numbers between endpoints do not obstruct any water

// approach:
//      area = length * height
//      the shorter of the 2 endpoints will be the height that determines how much water we can store
//      having a greater height & width will increase our area

//      use 2 pointers to check every possible endpoint between two walls to find the largest area possible

// brute force would use 2 nested loops and check every possible container that could be formed // O(n^2) time

// optimal approach could be done in linear time
// we know that we our area will be bound by the shorter of the 2 walls, so the shorter of the two walls will be the only wall that will affect our possible area
// init 2 pointers
// init a mostContainedWater var that will store our biggest possible area
// while the left pointer < right pointer
//      compute the current area for the given walls (length * width)
//      update the maxArea if current area is greater
//      move the smaller of the two pointers inward
// return mostContainedWater
// l = 1
// right = 7
// max = 49
    
// O(n) runtime: O(1) space (constant time operations, no extra data persisted)
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let mostContainedWater = 0;
    while (left < right) {
        let length = right - left;
//      width will be bound to the shorter of the 2 values of pointers
        let width = Math.min(height[left], height[right]);
        let currentArea = length * width;
//      update mostContainedWater with larger of existing and current
        mostContainedWater = Math.max(mostContainedWater, currentArea);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return mostContainedWater;
}