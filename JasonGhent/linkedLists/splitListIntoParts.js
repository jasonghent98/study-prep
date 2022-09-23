/* 
Given the head of a singly linked list and an integer k, split the linked list into k consecutive 
linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more 
than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always 
have a size greater than or equal to parts occurring later.

Return an array of the k parts.


[1,2,3]

constraints:
- if k is 1, we can just output the entire list into an array and return

approach:
1. find the length of the list and the remainder left over
2. we need to build k lists, where each differs no more in length by, where earlier sublists should occur earlier
3. push the current node onto the output
4. iterate over the size of each list. this will be the length of each k part
5. if there is a previous node, we set its next to null, to start the loop again with a detached node




complexity:

*/

const splitList = (head, k) => {
    if (k === 1) return [head]
    // find the length of the list
    const output = []
    const length = findLength(head)
    // find the length of each k group and the remainder nodes
    const lengthOfEachKGroup = Math.floor(length / k)
    let remainderNodes = length % k
    let cur = head, prev = null
    // build out each sublist. repeat this process k times
    for (let i = 0; i < k; i++) {
        output.push(cur)
        // we only want lengthOfKGroup elements in each sublist
        for (let j = 0; j < lengthOfEachKGroup; j++) {
            if (cur) { 
                prev = cur
                cur = cur.next
            }
        }
        // are there any remainders remaining AND do we still have a cur node?
        if (remainderNodes && cur) {
            prev = cur
            cur = cur.next
            remainderNodes--
        }
        // if there is a prev node, we cut its next connection off to keep it at lengthOfKGroupElements
        if (prev) prev.next = null
    }
    return output
}

const findLength = (head) => {
    let length = 0;
    while (head) {
        length++
        head = head.next
    }
    return length
}


class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
 }
 const head = new ListNode(1)
 head.next = new ListNode(2)
 head.next.next = new ListNode(3)
 head.next.next.next = new ListNode(4)
 head.next.next.next.next = new ListNode(5)
console.log(splitList(head, 3)) // [{1=>2}, {3=>4}, {5}]