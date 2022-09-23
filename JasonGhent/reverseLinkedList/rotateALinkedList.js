// Given the head of a linked list, rotate the list to the right by k places.
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


function rotateRight (head, rotations) {
    if (rotations < 1 || head === null || head.next === null) return head;
    // find the length of the list and find the last node
    let lengthOfList = 1;
    let lastNodeOfList = head;
    while (lastNodeOfList.next !== null) {
        lastNodeOfList = lastNodeOfList.next;
        lengthOfList++;
    }
    // connect tail of current list to the head (cycle)
    lastNodeOfList.next = head;
    // find the rotations if they are greater than the length of the list, they would just restart
    rotations %= lengthOfList;
    // find the stopping point (point at which we will rotate our list)
    let stoppingPoint = lengthOfList - rotations - 1;
    // node that will find the breakpoint of the list and separate it. breakpoint will stop on the tail of the rotated list
    let breakPoint = head;
    for (let i = 0; i < stoppingPoint; i++) {
        breakPoint = breakPoint.next;
    }
    // set breakpoint next to new head
    head = breakPoint.next;
    breakPoint.next = null;
    return head;
}
const test = new Node(1);
test.next = new Node(2);
test.next.next = new Node(3);
test.next.next.next = new Node(4);
test.next.next.next.next = new Node(5);
test.next.next.next.next.next = new Node(6);

console.log(rotateRight(test, 2));

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
// 5 -> 6 -> 1 -> 2 -> 3 -> 4