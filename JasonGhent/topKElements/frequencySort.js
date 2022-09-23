/* Given a string, sort it based on the decreasing frequency 
of its characters.

approach:
place each character along with its frequency in a map

place all of the characters with their frequencies in a 
maxHeap. the maxHeap will contain the number with the highest
frequency at its root

init an output array

once all of the characters and their values have been 
placed into the maxHeap, we can start pushing the characters
one by one onto an output array, building the array
with the largest frequency at the beginning, pushing on
the smaller frequencies at the end

join the array into a string at the end and return

time: insert each number into a maxHeap; O(nlogn) 
space: O(n), storing all of the chars in a map, heap, and output arr

*/

class MaxHeap {
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
        this.heap.sort((a,b) => a[0] - b[0]); // sort by highest frequency
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

const frequencySort = string => {
    let charFrequency = {};
    for (let char of string) {
        if (!(char in charFrequency)) charFrequency[char] = 1;
        else charFrequency[char] += 1;
    }
    // use a maxheap to keep track of highest frequency. we will be placing all of the properties from the frequency map into our heap
    const maxHeap = new MaxHeap([]);
    Object.keys(charFrequency).forEach(char => {
        maxHeap.push([charFrequency[char], char]); // [frequency, char] into the maxHeap
    });
    const result = []; // output array that will be joined into string
    while (maxHeap.heap.length > 0) {
        [frequency, char] = maxHeap.pop();
        for (let i = 0; i < frequency; i++) { // place each char the number of times it appears into output
            result.push(char);
        }
    }
    return result.join('');
    
}

console.log(frequencySort('Programming'));

