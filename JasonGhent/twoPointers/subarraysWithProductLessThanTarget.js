const Deque = require('./node_modules/collections/deque');//http://www.collectionsjs.com

function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    while ((product >= target && left < arr.length)) {
      product /= arr[left];
      left += 1;
    }
    
    // since the product of all numbers from left to right is less than the target 
    // therefore, all subarrays from left to right will have a product less than the 
    // target too; to avoid duplicates, we will start with a subarray containing only 
    // arr[right] and then extend it
    const tempList = new Deque();
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      console.log(tempList, 't')
      result.push(tempList.toArray());
      console.log(result, 'r')
    }
  }
  return result;
}

find_subarrays([2, 5, 3, 10], 30);

result = [[2], [5], [5,2], [3], [3,5], [10] ];
product = 10
left = 3
right = 3
i = 2


              i
              l
                r
arr = [2,5,3,10] 
target = 30
Deque = [10]