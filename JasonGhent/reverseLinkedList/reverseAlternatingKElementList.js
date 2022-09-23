class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseAlternatingKSublist (head, k) {
    if (k <= 1 || head === null) return head;
    let current = head;
    let prev = null;
    while (current !== null) {
        const lastNodeOfPrevPart = prev;
        const tailOfReversedList = current;
        let i = 0;
        while (current !== null && i < k) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i += 1;
        } 
        // connect the old part to the newly reversed list. prev will point to the head of the newly reversed list
        if (lastNodeOfPrevPart !== null) lastNodeOfPrevPart.next = prev;
        else head = prev;
        // current will point to the head of the next sublist that needs to be reversed
        tailOfReversedList.next = current;
        // skip k elements
        i = 0
        while (current !== null && i < k) {
            prev = current;
            current = current.next;
            i++;
        }
    }
    return head;
}

const test = new Node(1);
test.next = new Node(2)
test.next.next = new Node(3)
test.next.next.next = new Node(4)
test.next.next.next.next = new Node(5)
test.next.next.next.next.next = new Node(6);

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

// => 2 -> 1 -> 3 -> 4 -> 6 -> 5 -> null
console.log(reverseAlternatingKSublist(test, 2));