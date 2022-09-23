/* 
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left 
to position right, and return the reversed list.


*/

class ListNode {
    val: number | undefined
    next: ListNode | null
    constructor(val: number, next = null) {
        this.val = val
        this.next = next
    }
}

const reverseSublist = (head: ListNode | null, left: number, right: number): ListNode | null => {
    if (!head?.next || left == right) return head // already reversed
    // find the head of the sublist
    type nodeType = ListNode | null
    let i: number = 0
    let currNode: nodeType = head
    let prevNode: nodeType = null
    while (currNode && i < left - 1) { // the moment when i == left - 1, we are at the head of the sublist
        prevNode = currNode 
        currNode = currNode.next
        i++
    }
    // store refs to connect the list after reversing
    let tailOfFirstPart: nodeType = prevNode // if null, this means that left is the first node OR there is no node 
    let tailOfReversedList: nodeType = currNode
    prevNode = null 
    i = 0
    while (currNode && i <= right - left) {
        const nextNode: nodeType = currNode.next
        currNode.next = prevNode
        prevNode = currNode
        currNode = nextNode
        i++
    }

    // join the list back together
    if (tailOfFirstPart != null) tailOfFirstPart.next = prevNode 
    else head = prevNode

    if (tailOfReversedList) tailOfReversedList.next = currNode
    return head
}



const head = new ListNode(1)
head.next = new ListNode(2)
head.next = new ListNode(3)
head.next = new ListNode(4)
head.next = new ListNode(5)

console.log(reverseSublist(head, 2, 3)) // 1 4 3 2 5