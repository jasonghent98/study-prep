/*
strings are immutable, so we will need to create O(N) space for a new string


    i
'tree'



[e, e, r, t]


approach:
    - find the frequency for each character in the string
    - iterate over all entries and place within a maxheap
    - build the new string from the highest frequency characters within maxheap


TIME: O(N LOG N), worst case placing n unique characters into our maxheap
SPACE: O(N), for the hashmap and heap
*/


class Heap {
    compare: (a: number, b: number) => number
    heap: any[]
    constructor(compare) {
        this.heap = []
        this.compare = compare
    }
    enqueue(val) {
        this.heap.push(val)
        this.heap.sort(this.compare)
    }
    dequeue() {
        return this.heap.pop()
    }
    size() {
        return this.heap.length
    }
}
function frequencySort(s: string): string {
    if (s.length == 1) return s
    const charFrequency: Record<string, number> = {}
    for (let char of s) charFrequency[char] = charFrequency[char] + 1 || 1
    const compare = (a: number,b: number): number => a[1] - b[1]
    const maxHeap = new Heap(compare)
    Object.keys(charFrequency).forEach(char => {
        maxHeap.enqueue([char, charFrequency[char]])  
    })
    // build the new string from the heap
    const newStringArray: string[] = []
    while (maxHeap.size()) {
        const [char, frequency]: [string, number] = maxHeap.dequeue()
        // add the char to the array frequency times
        for (let i = 0; i < frequency; i++) {
            newStringArray.push(char)
        }
    }
    return newStringArray.join("")
};
