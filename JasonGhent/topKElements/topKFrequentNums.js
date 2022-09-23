/* Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it. */
class MinHeap {
    constructor(arr) {
        this.heap = arr;
        this.length = 0;
    }
    peek() {
        return this.heap[this.heap.length - 1];
    }
    push(val) {
        this.heap.push(val);
        this.length++;
        this.heap.sort((a,b) => b[0] - a[0]); // sort the frequencies by descending order to quick access
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}
/* 
place all of the nums in a hash map with their frequencies
loop over all of the numbers themselves in the map
    place the key-value pair in a minheap that will track the smallest frequency
    if you go over k length in your minHeap, pop off an element

all of the smallest frequencies will be weeded out and you will be left with the k elements with the highest frequency
push all of those onto an array
return the array
 */

const findKMostFrequentNums = (nums, k) => {
    const numFrequencies = {};
    nums.forEach(num => {
        if (!(num in numFrequencies)) numFrequencies[num] = 1;
        else numFrequencies[num]++;
    });

    const minHeap = new MinHeap([]);
    Object.keys(numFrequencies).forEach(num => {
        minHeap.push([numFrequencies[num], num]);
        if (minHeap.heap.length > k) minHeap.pop();
    });

    const highestFrequencies = [];
    while (minHeap.heap.length > 0) {
        highestFrequencies.push(minHeap.pop()[1]);
    }
    return highestFrequencies;
}
console.log(findKMostFrequentNums([1, 3, 5, 12, 11, 12, 11], 2))
