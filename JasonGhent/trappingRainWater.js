// still not solved... come back and finish
function trap (height) {
    let maxLeft = 0;
    let maxRight = 0;
    let totalWater = 0;
    let left = 0;
    let right = height.length - 1;
    let difference;
    while (left < right) {
        if (height[left] < height[right]) {
            if (maxLeft > height[left]) {
//                     here we can trap rainwater
                difference = maxLeft - height[left]
                totalWater += difference;
            }
            maxLeft = Math.max(maxLeft, height[left]);
            left++;
        } else {
            if (maxRight > height[right]) {
                difference = maxRight - height[right];
                totalWater += difference;
            }
            maxRight = Math.max(maxRight, height[right]);
            right--;
        }
    }
    return totalWater;
}
