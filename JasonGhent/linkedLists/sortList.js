// given the head of a linked list, sort it in ascending order and return the head




// time: O(N LOG N)
// space: O(LOG N), for rec call stack

const sortList = (head) => {
    if (!head || !head.next) return head
    let slow = head, fast = head, temp
    while (fast && fast.next) {
        temp = slow
        slow = slow.next
        fast = fast.next.next
    }
    temp.next = null // temp will be the end of the first half
    const leftList = sortList(head)
    const rightList = sortList(slow) // slow is the head of the second half
    return merge(leftList, rightList)
}

const merge = (left, right) => {
    let dummyNode = new ListNode(-Infinity)
    let curr = dummyNode
    while (left && right) {
        if (left.val < right.val) {
            curr.next = left
            left = left.next
        } else {
            curr.next = right
            right = right.next
        }
        curr = curr.next
    }

    while (left) {
        curr.next = left
        left = left.next
        curr = curr.next
    }

    while (right) {
        curr.next = right
        right = right.next
        curr = curr.next
    }
    return dummyNode.next
}



class ListNode {
    constructor(val = undefined, next = null) {
        this.val = val
        this.next = next
    }
}

const head = new ListNode(-1)
head.next = new ListNode(-5)
head.next.next = new ListNode(50)



console.log(sortList(head)) // -1 -> 0 -> 3 -> 4 -> 5