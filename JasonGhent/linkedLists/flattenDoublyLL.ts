var flatten = function(head) {
    
    traverse(head);
    
    return head
};


function traverse(node) {
    if (!node) {
        return node;
    }
    
    if (!node.next && !node.child) {
        return node;
    }
    
    if (node.child) {
        let nextNode = node.next;
        node.next = node.child;
        node.next.prev = node;
        node.child = null;
        
        if (nextNode) {
            const tailNode = traverse(node.next);
            tailNode.next = nextNode;
            nextNode.prev = tailNode;
        }
    }
    
    return traverse(node.next)
}
