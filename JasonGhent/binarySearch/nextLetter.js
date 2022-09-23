/*

const nextGreatestLetter = (letters, target) => { // binary search
    let start = 0;
    let end = letters.length - 1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (target < letters[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return letters[start % letters.length];
}  

console.log(nextGreatestLetter(['a', 'c', 'f', 'h'], 'f')) // 'h'
console.log(nextGreatestLetter(['a', 'c', 'f', 'h'], 'b')) // 'c'
console.log(nextGreatestLetter(['a', 'c', 'f', 'h'], 'm')) // 'a'

*/

class Heap {
    constructor(arr, comparator) {
      this.heap = arr;
      this.comparator = comparator;
    }
    peek() {
      return this.heap[this.heap.length - 1];
    }
    push(val) {
      this.heap.push(val);
      this.heap.sort(this.comparator);
    }
    pop() {
      return this.heap.pop();
    }
  }
  const smallestRange = (arrays) => {
    const minHeap = new Heap([], (a,b) => b[0] - a[0]);
    let rangeStart = 0;
    let rangeEnd = Infinity;
    let currentMax = -Infinity;
    // place the smallest number of each array into heap
    for (let i = 0; i < arrays.length; i++) { // first in each
      minHeap.push([arrays[i][0], 0, arrays[i]]);
      currentMax = Math.max(currentMax, arrays[i][0]);
    }
    while (minHeap.heap.length === arrays.length) {
      const [number, index, array] = minHeap.pop();
      if (rangeEnd - rangeStart > currentMax - number) {
        rangeEnd = currentMax;
        rangeStart = number;
      }
      if (index + 1 < array.length) {
        minHeap.push([array[index + 1], index + 1, array]);
        currentMax = Math.max(currentMax, array[index + 1]);
      }
    }
    return [rangeStart, rangeEnd];
  }
  
  console.log(smallestRange([[1, 5, 8],[4, 12],[7, 8, 10]]))
  console.log(smallestRange([[1, 9],[4, 12], [7, 10, 16]]))