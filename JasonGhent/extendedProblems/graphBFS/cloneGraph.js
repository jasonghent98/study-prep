function Node(val, neighbors) {
    this.val = (val === undefined) ? 0 : val;
    this.neighbors = (neighbors === undefined) ? [] : neighbors;
 };

 const cloneGraph = node => {
    if (!node) return null;
    const oldToNew = new Map();
    const queue = [node];
    oldToNew.set(node, new Node(node.val));
    while (queue.length) {
        const current = queue.shift();
        for (let nei = 0; nei < current.neighbors.length; nei++) {
            if (!oldToNew.has(nei)) {
                oldToNew.set(nei, new Node(nei.val));
                queue.push(nei);
                // console.log(oldToNew)
            }
            // grab the original nei and push itself onto clones nei list
            const cloneNeighbors = oldToNew.get(current).neighbors;
            cloneNeighbors.push(oldToNew.get(nei)); // push the new clone onto itself
        }
    }
    return oldToNew.get(node);
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
node1.neighbors.push(2,4);
node2.neighbors.push(1,3);
node3.neighbors.push(2,4);
node4.neighbors.push(1,3);

console.log(cloneGraph(node1))