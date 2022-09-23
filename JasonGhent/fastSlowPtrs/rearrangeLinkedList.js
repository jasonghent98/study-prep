/* 

l
r
1 -> 2  -> 3 <- 4
|
v




1 -> 4 -> 2 -> 3



l                  
r
1 -> 2 -> 3 -> 4 -> 5


1->5->2->4->3


approach:
- reverse the second half of the list
- use a boolean value to switch between left and right

TIME: O(N)
SPACE: O(1), in place

*/
function reorderList(head){
    if (!head.next) return 
    // fast and slow to find the middle, then reverse the second half
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let reversedHead = reverseSecondHalf(slow)
    let isLeftTurn = true
    let left = head
    while (left != reversedHead) {
        if (isLeftTurn) {
            let next = left.next
            left.next = reversedHead
            left = next
        } else {
            let next = reversedHead.next
            reversedHead.next = left
            reversedHead = next
        }
        // flip the turn
        isLeftTurn = !isLeftTurn
    }
};

const reverseSecondHalf = (curr) => {
    let prev = null
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}