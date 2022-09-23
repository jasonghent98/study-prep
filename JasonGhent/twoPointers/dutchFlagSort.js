function dutch_flag_sort(arr) {
    // all elements < low are 0, and all elements > high are 2
    // all elements from >= low < i are 1
    let left = 0,
      right = arr.length - 1,
      i = 0;
    while (i <= right) {
      if (arr[i] === 0) {
        //   let temp = arr[i];
        //   arr[i] = arr[left];
        //   arr[left] = temp;
        [arr[i], arr[left]] = [arr[left], arr[i]]; // swap
        // increment 'i' and 'low'
        i += 1;
        left += 1;
      } else if (arr[i] === 1) {
        i += 1;
      } else { // the case for arr[i] === 2
        [arr[i], arr[right]] = [arr[right], arr[i]]; // swap
        // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, 
        // or 2
        // let temp = arr[i];
        // arr[i] = arr[right];
        // arr[right] = temp;
        right -= 1;
      }
    }
  }
  

  const dutchFlagSort = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while (i <= nums.length) {
      if (nums[i] === 0) {
        nums[left] = nums[right];
        left++;
      } else if (nums[i] === 1) {

      } else {
        
      }
    }
  }
  
  let arr = [1, 0, 2, 1, 0];
  console.log(arr);
  dutch_flag_sort(arr);
  console.log(arr);
  
