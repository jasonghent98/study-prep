/* 



    originalNode => cloneNode => originalNode2 => cloneNode2 => originalNode3 => cloneNode3 => ...

constraints:
- consider a null list in your code



ideas:



complexity:
time: O(N)
space: O(1) not accounting for the new cloned list, where we are only redefining ptrs in place

*/
class ListNode {
    constructor(val, next, random) {
        this.val = val
        this.next = next
        this.random = random
    }
}


const copyList = (head) => {
    if (!head) return null // clone of null is null
    let current = head
    // initally, just create copies of the original nodes. do not assign any ptrs other than the next
    while (current) {
        const clone = new ListNode(current.val, current.next, null)
        current.next = clone
        current = current.next.next // update current to the next original node to repeat cloning
    }
    current = head
    // assign the random ptrs to each of the clones if it exists on original
    while (current) {
        // curr.next.random points to the immediate clone
        current.next.random = current.random ? current.random.next : null
        // update to the next original to repeat process
        current = current.next.next
    }
    // restore balance by matching original ptrs to original nodes, with clones too
    current = head // will take care of original ptrs
    const cloneHead = head.next // head of cloned list
    let clonePtr = head.next // will take care of cloned ptrs

    // current lags behind the clone 
    while (current) {
        current.next = current.next.next // always guaranteed to have a clone after the original
        clonePtr.next = clonePtr.next ? clonePtr.next.next : null
        current = current.next
        clonePtr = clonePtr.next
    }
    return cloneHead
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

console.log(copyList(head)) // {1} => {2}