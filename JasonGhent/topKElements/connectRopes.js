/* Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. 
The cost of connecting two ropes is equal to the sum of their lengths.

approach:
following a greedy approach by connecting all of the smallest ropes will ensure the lowest cost

*/

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
        this.heap.sort((a,b) => b - a); // min heap
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

/* following a greedy approach, we can take all of the smallest rope lengths and add those
to give us the smallest cost at the end. a min heap will help process those in order 
assume that there are no negative lengths
*/
const connectRopesWithMinCost = (ropeLengths) => {
    let result = 0;
    const minHeap = new MinHeap([]);
    for (let i = 0; i < ropeLengths.length; i++) {
        minHeap.push(ropeLengths[i]);
    }
    while (minHeap.heap.length > 1) {
        const cost = minHeap.pop() + minHeap.pop();
        result += cost;
        minHeap.push(cost); // push the cost back into the heap. this will be added with the next smallest length rope
    }
    return result;
}

console.log(`The min cost is: ${connectRopesWithMinCost([1, 3, 11, 5])}`);