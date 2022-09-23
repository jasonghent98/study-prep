/* Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list. 

create a minHeap
place all of the smallest elements from each list into our heap
after removing the smallest element from the heap, we can add the next smallest element from the same list into the heap
repeat this process until a final sorted list is built
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Heap {
    constructor(arr, comparator) {
        this.heap = arr;
        this.comparator = comparator;
    }
    push(val) {
        this.heap.push(val);
        this.heap.sort(this.comparator);
    }
    peek() {
        return this.heap[this.heap.length - 1];
    }
    pop() {
        return this.heap.pop();
    }
}

const sortLists = (lists) => {
    const minHeap = new Heap([], (a,b) => b.val - a.val); // heap will sort by value
    lists.forEach(list => {
        if (list) minHeap.push(list);
    });
    let resultHead = null;
    let resultTail = null;
    while (minHeap.heap.length) {
        const node = minHeap.pop();
        if (!resultHead) resultHead = resultTail = node;
        else {
            resultTail.next = node;
            resultTail = resultTail.next;
        }
        if (node.next) minHeap.push(node.next);
    }
    return resultHead;
}

const head1 = new ListNode(3);
head1.next = new ListNode(5);
head1.next.next = new ListNode(6);

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next = new ListNode(4);

const head3 = new ListNode(6);
head3.next = new ListNode(7);
head3.next.next = new ListNode(8);

console.log(sortLists([head1, head2, head3]));