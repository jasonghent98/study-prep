// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a 
// multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
function verifyLength (current, k) {
    let i = 0;
    while (current !== null && i < k) {
        current = current.next;
        i++;
    }
    return current;
}

function reverseKGroup (head, k) {
    // edge case
    if (!head || !head.next || k <= 1) return head;
    const dummyNode = new ListNode(0, head);
    let lastNodeOfPrevGroup = dummyNode;
    let current = head;
    while (true) {
        // verify the length of the next sublist
        let kth = verifyLength(lastNodeOfPrevGroup, k);
        // function returned null; list isn't long enough to reverse
        if (!kth) break;
        // store refs to important vars
        let prev = lastNodeOfPrevGroup;
        let tailOfReversedList = current;
        let i = 0
        while (current !== null && i < k) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i++;
        }
        
        lastNodeOfPrevGroup.next = prev;
        // reattach nodes;
        tailOfReversedList.next = current;
        lastNodeOfPrevGroup = tailOfReversedList;
    }
    return dummyNode.next;
}   

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseKGroup(head, 2));

