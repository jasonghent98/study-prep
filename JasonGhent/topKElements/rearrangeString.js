/* given a string, see if you can rearrange the chars in such a way that no 2 chars appear next to one another 

frequency matters. use a hash map to store the frequency of the chars

time: O(n log n) to push each value (n) into the the heap (log n).
space: O(n) for both the heap and the output arr, which will hold all of our chars
*/
class MaxHeap {
    constructor(arr) {
        this.heap = arr;
        this.length = 0;
    }
    push(val) {
        this.heap.push(val);
        this.length++;
        this.heap.sort((a,b) => a[0] - b[0]);
    }
    peek() {
        return this.heap[this.length - 1];
    }
    pop() {
        this.length--;
        return this.heap.pop();
    }
}


const rearrangeString = string => {
    let charFrequency = {};
    for (let char of string) {
        if (!(char in charFrequency)) charFrequency[char] = 1;
        else charFrequency[char] += 1;
    }
    const maxHeap = new MaxHeap([]);
    Object.keys(charFrequency).forEach(char => {
        maxHeap.push([charFrequency[char], char]);
    });
    let resultString = [];
    let prevChar = null;
    let prevFrequency = 0;
    while (maxHeap.heap.length > 0) {
        const [frequency, char] = maxHeap.pop();
        if (prevChar !== null && prevFrequency > 0) maxHeap.push([prevFrequency, prevChar]);
        resultString.push(char);
        prevChar = char;
        prevFrequency = frequency - 1;
    }
    if (string.length === resultString.length) return resultString.join('');
    return '';
}

console.log(rearrangeString('aappp'));