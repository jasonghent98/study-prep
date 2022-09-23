/* Given a string and a number ‘K’, find if the string can be rearranged such that the same characters 
are at least ‘K’ distance apart from each other.

inputs => string, k 
output => a string where each same char is at least K distance apart

constraints:
    what happens if k exceeds the boundary of the array while processing the last chars of string?
    can we always assume a valid answer?

edge cases:
    'ffff', k = 2 
    => there is no output that will satisfy the condition

frequencies will be important 

maxHeap can help us keep track of each char and the highest frequency

start out by placing all of the chars and frequencies in a map
init a maxHeap
place all chars and frequencies in maxHeap
init a resultString arr that will be joined into a string
loop while the maxheap has pairs that need to be processed
    destructure the pair from the recently removed item from heap
    push the pair to a queue to be processed in order
    after k elements have been processed and if the charFrequency > 0, push pair back into heap
    push the current char onto the output array

    time: O(n log n); process each char (n) and place into heap (log n);
    space: O(n) for storing the chars in our output arr, and our heap
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
        this.heap.sort((a,b) => a[0] - b[0]);
    }
    pop() {
        const val = this.heap.pop();
        this.length--;
        return val;
    }
}

const rearrangeStringKDistanceApart = (string, k) => {
    if (k <= 1) return string;
    const charFrequency = {};
    for (let char of string) {
        if (!(char in charFrequency)) charFrequency[char] = 1;
        else charFrequency[char] += 1;
    }
    const maxHeap = new MaxHeap([]);
    Object.keys(charFrequency).forEach(char => {
        maxHeap.push([charFrequency[char], char]);
    });
    let resultString = [];
    let queue = [];
    while (maxHeap.heap.length > 0) {
        let [frequency, char] = maxHeap.pop();
        resultString.push(char);
        queue.push([frequency - 1, char]);
        if (queue.length === k) {
            [frequency, char] = queue.shift();
            if (frequency > 0) maxHeap.push([frequency, char]);
        }
    }
    if (string.length === resultString.length) return resultString.join('');
    return '';
}

console.log(rearrangeStringKDistanceApart('mmpp', 2));
console.log(rearrangeStringKDistanceApart('aab', 2));
console.log(rearrangeStringKDistanceApart('jaason', 3));
