/* Design a class that simulates a Stack data structure, implementing the following two operations:

push(int num): Pushes the number ‘num’ on the stack.
pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was 
pushed later.

frequency of each number is important
number itself is important
the order in which the elements were pushed onto stack is important(sequence)
 */

class Heap {
    constructor(arr, comparator) {
        this.heap = [];
        this.comparator = comparator;
    }
    push(val) {
        this.heap.push(val);
        this.heap.sort(this.comparator);
    }
    pop() {
        return this.heap.pop();
    }
    peek() {
        return this.heap[this.heap.length - 1]
    }
}

class Element {
    constructor(val, frequency, sequenceNumber) {
        this.val = val;
        this.frequency = frequency;
        this.sequenceNumber = sequenceNumber;
    }
}

class FrequencyStack {
    constructor() {
        this.maxHeap = new Heap([], (a,b) => a.frequency - b.frequency); // sort by highest frequency
        this.sequenceNumber = 0; // init to 0. increment by 1 each time we push a new element
        this.frequencyMap = {};
    }
    push(val) {
        // check to see if the value exists in frequencymap first
        if (!(val in this.frequencyMap)) this.frequencyMap[val] = 1;
        else  this.frequencyMap[val] += 1;
        const element = new Element(val, this.frequencyMap[val], this.sequenceNumber);
        this.maxHeap.push(element);
        console.log(this.maxHeap.heap)
        this.sequenceNumber += 1;
    }
    pop() { 
        const num = this.maxHeap.pop().val;
        // if the frequencies are not the same
        if (this.frequencyMap[num] > 1) {
            this.frequencyMap[num] -= 1;
        } else delete this.frequencyMap[num];
        return num;
    }
}
const frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
