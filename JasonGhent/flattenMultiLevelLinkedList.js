// You are given a doubly linked list, which contains nodes that have a next pointer, 
// a previous pointer, and an additional child pointer. This child pointer may or may 
// not point to a separate doubly linked list, also containing these special nodes. These 
// child lists may have one or more children of their own, and so on, to produce a multilevel 
// data structure as shown in the example below.
// Given the head of the first level of the list, flatten the list so that all the nodes appear 
// in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

// traverse the linked list iteratively
// if it contains a child, recursively call into the child
// base case: if node.next === null, return 
// 1 - 2 - 3 - 7

// 1 - 2 - 3 - 4 - 5 - 6                            node = 3
//         |                                        pre = 7
//         7 - 8 - 9 - 10  
//             |                                                   dfs(11) -> 12
//             11- 12                              CALL STACK:     dfs(7)
dfs(1)

const dfs = function(node) {
    let pre = null;
    while (node !== null) {
        pre = node;
        if (node.child !== null) {
            let tail = dfs(node.child)
            tail.next = node.next;
            if (node.next !== null) {
                node.next.prev = tail;
            }
            node.next = node.child;
            node.child.prev = node;
            node.child = null;
            
            node = tail.next;
            pre = tail;
        } else {
            node = node.next;
        }
    }
    return pre;   
}
    
var flatten = function(head) {
    dfs(head);
    return head;
};